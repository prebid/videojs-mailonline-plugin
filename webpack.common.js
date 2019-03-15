var webpack = require('webpack');
var path = require('path');
var eslintLoader = require('eslint-loader');
var StringReplacePlugin = require('string-replace-webpack-plugin');

var buildProps = require('./webpack.properties.js');

var bannerOptions = {
    banner: buildProps.plugin.bannerText,
    entryOnly: true,
    raw: false
}


module.exports = function (mode) {

    console.log('Exporting Common Config > mode: ' + mode);

    var config = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    include: [
                         path.resolve(__dirname, 'src')
                    ],
                    loader: 'eslint-loader',
                    options: {
                        emitError: true,
                        failOnError: true,
                    }
                },
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    include: [
                        path.resolve(__dirname, 'src')
                    ],
                    loader: StringReplacePlugin.replace({
                        replacements: [
                            {
                                /* Any '</script>' (closing stript tags within string literals)
                                 * that exist in the code must be escaped - or they may be
                                 * misinterpreted by browsers as closing the parent script tag
                                 * that this code is embedded within on the parent html page. */
                                pattern: /<\/script>/gi,
                                replacement: function (match, p1, offset, string) {
                                    // console.log('####################### STRING REPLACE PLUGIN >> match: ' + match + ' --- p1: ' + p1 + /* ' --- offset: ' + offset + */' --- string: ' + string);
                                    console.warn('*******************************************************************************************');
                                    console.warn('*** WARNING: "<\/script>" string found in code - THIS SHOULD BE ESCAPED to: "<\\/script>" ***');
                                    console.warn('*******************************************************************************************');
                                    return '<\\/script>';
                                }
                            },
                            {
                                /* Remove any debugger statements for a production build */
                                pattern: /debugger;|debugger/g,
                                replacement: function (match, p1, offset, string) {
                                    // console.log('####################### STRING REPLACE PLUGIN >> match: ' + match + ' --- p1: ' + p1 + /* ' --- offset: ' + offset + */' --- string: ' + string);
                                    if (mode === buildProps.MODE_PRODUCTION) {
                                        throw new Error('*** ERROR: HEY YOU! REMOVE THE debugger; STATEMENT FROM YOUR CODE! ***');
                                    } else {
                                        console.warn('********************************************************************************');
                                        console.warn('*** DEV WARNING: debugger; statement found in code - DO NOT COMMIT THIS CODE ***');
                                        console.warn('********************************************************************************');
                                        return match;   // Return the same string back - just throw a big warning
                                    }
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            new StringReplacePlugin(),
            new webpack.BannerPlugin(bannerOptions)
        ]
    };

    return config;
};
