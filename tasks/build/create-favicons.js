/**
 * Create favicons and add reference to HTML.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'create:favicons', function() {

        // Target built index file.
        return gulp.src( options.config.source + '/assets/' + options.config.favicon )

            // Generate favicons.
            .pipe( plugins.favicons( {
                files: {
                    src: './' + options.config.source + '/assets/favicon.png',
                    dest: '/favicons'
                },
                settings: {
                    background: '#1d1d1d',
                    vinylMode: true
                }
            }, function ( html ) {
                options.config._faviconHtml = html;
            } ) )

            // Build files.
            .pipe( gulp.dest( options.config.build + '/favicons' ) );
    } );
};