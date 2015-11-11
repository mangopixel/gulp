/**
 * Build JavaScript.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:js', function() {

        // Source files ordered, prioritising Angular modules.
        var files = [
            options.config.source + '/' + options.config.js.source + '/**/*.module.js',
            options.config.source + '/' + options.config.js.source + '/**/*.js'
        ];

        // Target source files.
        return gulp.src( files )

            // Catch and print out all errors
            .pipe( plugins.plumber( options.error ) )

            // Wrap code within an immediately invoked function expression.
            .pipe( plugins.iife() )

            // Add Angular dependency injection annotations.
            .pipe( plugins.ngAnnotate() )

            // Include bower files.
            .pipe( plugins.addSrc.prepend( plugins.mainBowerFiles(), {
                base: './bower_components'
            } ) )

            // Ignore non-js files
            .pipe( plugins.filter( '**/*.js' ) )

            .pipe( plugins.cached( 'scripts' ) )

            // Minify file.
            .pipe( plugins.if ( options.config.js.minify, plugins.uglify() ) )

            .pipe( plugins.remember( 'scripts' ) )

            // Start sourcemapping.
            .pipe( plugins.sourcemaps.init() )

            // Concatenate all JavaScript files.
            .pipe( plugins.concat( 'app.js' ) )

            // Build file.
            .pipe( gulp.dest( options.config.build ) )

            // End sourcemapping.
            .pipe( plugins.sourcemaps.write( '.' ) );
    } );
};
