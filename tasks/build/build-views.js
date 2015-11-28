var mergeStream = require( 'merge-stream' );

/**
 * Build views from jade and copy html files
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:views', function() {

        var viewsPath = options.config.source + '/views/**/*.html';

        var html = gulp.src( viewsPath );
        var jadeAsHtml = gulp.src( viewsPath )
            .pipe( plugins.plumber() )
            .pipe( plugins.jade() );

        return mergeStream( jadeAsHtml, html )
            .pipe( gulp.dest( options.config.build + '/views' ) );
    } );
};
