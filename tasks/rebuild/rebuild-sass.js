/**
 * Rebuild Sass files on change.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'rebuild:sass', function( callback ) {
        plugins.sequence( 'clean:css', 'build:sass', 'revise:css', 'rebuild:html' )( callback );
    } );
};