/**
 * Clean up unused JavaScript files.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'clean:js', function () {

        // Delete JavaScript files.
        return plugins.del( options.config.build + '/**/*.js' );
    } );
};