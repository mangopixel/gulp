/**
 * Rebuild JavaScript files on change.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'rebuild:js', function( callback ) {
        plugins.sequence( 'lint:js', 'clean:js', 'build:js', 'revise:js', 'rebuild:html' )( callback );
    } );
};