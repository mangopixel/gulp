/**
 * Clean up and prepare for a new build.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'clean', function () {

        // Delete build folder.
        return plugins.del( options.config.build );
    } );
};