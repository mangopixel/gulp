/**
 * Lints JavaScript source.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'lint:js', function() {

        // Target source files.
        return gulp.src( options.config.source + '/' + options.config.js.source + '/**/*.js' )

            // Catch and print out all errors
            .pipe( plugins.plumber( options.error ) )

            // Validate file for errors.
            .pipe( plugins.jsvalidate() )

            .pipe( plugins.eslint( {
                configFile: './node_modules/mango-gulp/.eslintrc'
            } ) )

            .pipe( plugins.eslint.format() )

            .pipe( plugins.eslint.failAfterError() );
    } );
};