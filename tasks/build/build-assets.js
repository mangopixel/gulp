/**
 *
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:assets', function() {

        return gulp.src( options.config.source + '/assets/**/*.*', '!' + options.config.source + '/assets/favicon.png' )
            .pipe( gulp.dest( options.config.build ) );
    } );
};
