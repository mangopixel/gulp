/**
 * Create favicons and insert references into HTML.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:favicons', function( callback ) {
        plugins.sequence( 'create:favicons', 'insert:favicons' )( callback );
    } );
};