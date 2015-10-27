/**
 * Watches files for changes.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'watch', function () {

        // Rebuild JavaScript on changes.
        gulp.watch( options.config.source + '/' + options.config.js.source + '/**/*.js', [ 'rebuild:js' ] );

        // Rebuild CSS on Sass changes.
        gulp.watch( options.config.source + '/' + options.config.sass.source + '/**/*.scss', [ 'rebuild:sass' ] );

        // Rebuild HTML on changes.
        gulp.watch( options.config.source + '/' + '/**/*.html', [ 'rebuild:html' ] );

        // Reload BrowserSync on changes to index.html.
        gulp.watch( options.config.build + '/index.html' ).on( 'change', plugins.browserSync.reload );
    } );
};