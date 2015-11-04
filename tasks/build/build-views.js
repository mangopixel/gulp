/**
 *
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:views', function() {

        return gulp.src( options.config.source + '/views/**/*.html' )
            .pipe( gulp.dest( options.config.build + '/views' ) );
    } );
};
