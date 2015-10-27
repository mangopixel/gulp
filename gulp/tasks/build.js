/**
 * Compiles JavaScript and Sass.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build', function( callback ) {
        plugins.sequence( 'build:js', 'build:sass', 'build:html' )( callback );
    } );
};