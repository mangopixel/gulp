var mergeStream = require( 'merge-stream' );

/**
 * Build views from jade and copy html files
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:views', function() {

        var viewsPath = options.config.source + '/views';

        // Source html
        var html = gulp.src( viewsPath + '/**/*.html' );

        // Source jade and convert to html
        var jadeAsHtml = gulp.src( viewsPath + '/**/*.jade' )
            .pipe( plugins.plumber() )
            .pipe( plugins.jade() );

        // Merge the streams and store files
        return mergeStream( jadeAsHtml, html )
            .pipe( gulp.dest( options.config.build + '/views' ) );
    } );
};
