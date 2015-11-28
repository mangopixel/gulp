var reporters = require( 'jasmine-reporters' );

/**
 * Perform jasmine tests.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'test', function ( callback ) {
        
        // Find test files (*.spec.js)
        var testFiles = options.config.source + '/' + options.config.js.source + '/**/*.spec.js';
        
        // Perform tests
        return gulp.src( testFiles )
            .pipe( plugins.jasmine( {
                reporter: new reporters.JUnitXmlReporter()
            } ) );
    } );
}
