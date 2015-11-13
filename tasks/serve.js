var historyApiFallback = require( 'connect-history-api-fallback' );

/**
 * Connects to a local development server.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'serve', function ( callback ) {

        /*
         * Connect to server.
         */
        plugins.browserSync( {
            port: options.config.port,
            notify: false,
            server: {
                baseDir: options.config.build,
                middleware: [ historyApiFallback() ]
            }
        }, callback );
    } );
};
