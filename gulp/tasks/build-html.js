/**
 * Build HTML.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:html', function() {

        // Target source files.
        return gulp.src( options.config.source + '/*.html' )

            // Inject Google Analytics script.
            .pipe( plugins.ga( {
                url: options.config.url,
                uid: options.config.analyticsId
            } ) )

            // Build file.
            .pipe( gulp.dest( options.config.build ) );
    } );
};