var merge = require('webpack-merge');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var buildProps = require('./webpack.properties.js');

var WEBPACK_MODE = buildProps.MODE_DEVELOPMENT;

var commonConfig = require('./webpack.common.js')(WEBPACK_MODE);

module.exports = function (env, argv) {

    var cleanConfig = {
        plugins: [
            new CleanWebpackPlugin()
        ]
    };

    var pluginConfig = {
        mode: WEBPACK_MODE,
        entry: buildProps.plugin.entry_file,
        devtool: buildProps.devTool[WEBPACK_MODE],
        output: {
            path: buildProps.output.path,
            filename: buildProps.plugin.output_file[WEBPACK_MODE],
            libraryTarget: buildProps.plugin.libraryTarget,
            library: buildProps.plugin.var_name
        }
    };

    pluginConfig = merge(pluginConfig, commonConfig, cleanConfig);

    // console.log('---------------------------------------------');
    // buildProps.util.traceObj(loaderConfig);
    // console.log('---------------------------------------------');
    // buildProps.util.traceObj(pluginConfig);
    // console.log('---------------------------------------------');

    return [pluginConfig];
};
