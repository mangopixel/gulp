/**
 * Minify HTML files.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'minify:html', function() {

        // Target source files.
        return gulp.src( options.config.build + '/**/*.html' )

            // Minify files.
            .pipe( plugins.if( options.config.html.minify, plugins.minifyHtml() ) )

            // Minify inline styles and scripts.
            .pipe( plugins.if( options.config.html.minify, plugins.minifyInline() ) )

            // Build files.
            .pipe( gulp.dest( options.config.build ) )
    } );
};