/**
 * Add revision hashes to cache bust assets.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'revise', function( callback ) {
        plugins.sequence( 'revise:assets', 'revise:replace' )( callback );
    } );
};