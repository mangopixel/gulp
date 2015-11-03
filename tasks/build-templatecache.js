/**
 * Create template file for views. Load into angular by including the
 * module 'templates' and sourcing the file from index.html, after
 * angular and before javascript for the app.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:templatecache', function() {

        return gulp.src( options.config.source + 'views/**/*.html' )
            .pipe( plugins.angularTemplatecache() )
            .pipe( gulp.dest( options.config.build ) );

    } );
};

