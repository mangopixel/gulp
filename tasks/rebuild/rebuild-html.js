/**
 * Rebuild HTML files on change.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'rebuild:html', function( callback ) {
        plugins.sequence( 'build:views', 'build:html', 'revise:replace', 'minify:html' )( callback );
    } );
};
