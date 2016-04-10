/**
 * Add revision hashes to cache bust assets.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'revise:assets', function () {

        // Source files.
        var files = [];

        if ( options.config.js.revise ) {
            files.push( options.config.build + '/**/*.js' );
        }

        if ( options.config.sass.revise ) {
            files.push( options.config.build + '/**/*.css' );
        }

        // Target source files.
        return gulp.src( files )

            // Append revision hash to the filename.
            .pipe( plugins.rev() )

            // Delete original unhashed files.
            .pipe( plugins.revDeleteOriginal() )

            // Build file.
            .pipe( gulp.dest( options.config.build ) )

            // Add revision mapping to manifest.
            .pipe( plugins.rev.manifest( options.config.build + '/rev-manifest.json' ) )

            // Build manifest file.
            .pipe( gulp.dest( '' ) )
    } );
};
