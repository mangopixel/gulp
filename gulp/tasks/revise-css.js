/**
 * Add revision hashes to cache bust CSS files.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'revise:css', function() {

        // Target source files.
        return gulp.src( options.config.build + '/**/*.css' )

            // Append revision hash to the filename.
            .pipe( plugins.rev() )

            // Delete original unhashed files.
            .pipe( plugins.revDeleteOriginal() )

            // Build file.
            .pipe( gulp.dest( options.config.build ) )

            // Add revision mapping to manifest.
            .pipe( plugins.rev.manifest( options.config.build + '/rev-manifest.json', {
                merge: true
            } ) )

            // Build manifest file.
            .pipe( gulp.dest( '' ) )
    } );
};