/**
 * Create template file for views. Load into angular by including the
 * module 'templates' and sourcing the file from index.html, after
 * angular and before javascript for the app.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:templatecache', function() {
        
        var filesIn = options.config.source + '/views/**/*.html';
        var filesOut = options.config.build;

        return gulp.src( filesIn )
            .pipe( plugins.angularTemplatecache() )
            .pipe( gulp.dest( filesOut ) );

    } );
};

