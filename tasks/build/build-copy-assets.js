/**
 * 
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:copy-assets', function() {

        return gulp.src( options.config.source + '/assets/**/*.*' )
            .pipe( gulp.dest( options.config.build + '/assets' ) );
    } );
};
