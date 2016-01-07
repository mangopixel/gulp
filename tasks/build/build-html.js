var mergeStream = require( 'merge-stream' );

/**
 * Build HTML from root of source folder.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:html', function() {

        // Source html files from root of source
        var html = gulp.src( options.config.source + '/*.html' );

        // Source jade files from root of source
        var jadeAsHtml = gulp.src( options.config.source + '/*.jade' )

            // Handle errors gracefully
            .pipe( plugins.plumber() )

            // Transform jade to html
            .pipe( plugins.jade() );

        // Merge the html files into one stream
        var fileStream = mergeStream( html, jadeAsHtml );

        // Process the files as regular html
        return fileStream

            // Inject Google Analytics script.
            .pipe( plugins.ga( {
                url: options.config.url,
                uid: options.config.analyticsId
            } ) )

            // Change ng-* to data-ng-* for HTML5 validation.
            .pipe( plugins.angularHtmlify( {
                customPrefixes: [ 'ui-' ]
            } ) )

            // Build file.
            .pipe( gulp.dest( options.config.build ) );
    } );
};
