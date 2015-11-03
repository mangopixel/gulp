/**
 * Replace old paths with the hashed paths in index.html and sourcemaps.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'revise:replace', function() {

        // Target revision manifest file.
        var manifest = gulp.src( options.config.build + '/rev-manifest.json' );

        // Target source files.
        return gulp.src( [ options.config.build + '/index.html', options.config.build + '/*.map' ] )

            // Replace occurences of filenames with revised filenames.
            .pipe( plugins.revReplace( {
                replaceInExtensions: [ '.html', '.map' ],
                manifest: manifest
            } ) )

            // Build files.
            .pipe( gulp.dest( options.config.build ) );
    } );
};