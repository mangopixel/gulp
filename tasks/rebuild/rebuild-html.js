/**
 * Rebuild HTML files on change.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'rebuild:html', function( callback ) {
        plugins.sequence( 'build:html', 'revise:replace', 'insert:favicons', 'minify:html' )( callback );
    } );
};
