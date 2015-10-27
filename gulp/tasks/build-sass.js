/**
 * Build CSS from Sass.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:sass', function() {

        // Target source files.
        return gulp.src( options.config.source + '/' + options.config.sass.source + '/**/*.scss' )

            // Catch and print out all errors
            .pipe( plugins.plumber( options.error ) )

            // Start sourcemapping.
            .pipe( plugins.sourcemaps.init() )

            // Compile Sass.
            .pipe( plugins.sass( options.config.sass.options ) )

            // Add prefixes for old browsers.
            .pipe( plugins.autoprefixer() )

            // Minify file.
            .pipe( plugins.if( options.config.sass.minify, plugins.minifyCss() ) )

            // End sourcemapping.
            .pipe( plugins.sourcemaps.write( '.' ) )

            // Build file.
            .pipe( gulp.dest( options.config.build ) );
    } );
};