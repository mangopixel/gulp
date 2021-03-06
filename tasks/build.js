/**
 * Compiles JavaScript and Sass.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build', function( callback ) {
        plugins.sequence( 'lint:js', 'build:js', 'build:sass', 'build:html', 'build:views', 'build:assets' )( callback );
    } );
};
