/**
 * Insert reference to favicons into HTML.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'insert:favicons', function() {

        // Target built index file.
        return gulp.src( options.config.build + '/index.html' )

            // Insert compiled html from gulp-favicons into the head tag.
            .pipe( plugins.cheerio( {
                run: function ( $, file ) {
                    var head = $( 'head' );
                    head.html( head.html() + options.config._faviconHtml );
                }
            } ) )

            // Build file.
            .pipe( gulp.dest( options.config.build ) );
    } );
};