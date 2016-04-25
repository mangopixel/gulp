/**
 * Clean up unused CSS files.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'clean:css', function () {

        // Delete CSS files.
        return plugins.del( options.config.build + '/*.css' );
    } );
};
