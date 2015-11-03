/**
 * Copy assets folder from source to build.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'revise:assets', function() {

        // Source.
        var files = [
            options.config.source + '/assets',
        ];

        // Target.
        return gulp.src( files )
            .pipe( gulp.dest( option.config.build ) );
    } );
};
