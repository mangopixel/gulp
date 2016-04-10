var fs = require( 'fs' );

/**
 * Build JavaScript.
 */
module.exports = function ( gulp, options, plugins ) {
    gulp.task( 'build:js', function() {

        var localeFiles = [];

        // Source files ordered, prioritising Angular modules.
        var files = [

            // Load angular modules
            options.config.source + '/' + options.config.js.source + '/**/*.module.js',

            // Load all other js files
            options.config.source + '/' + options.config.js.source + '/**/*.js',

            // Drop testfiles
            '!' + options.config.source + '/' + options.config.js.source + '/**/*.spec.js',

        ];

        if ( ! options.config.js.includeBefore )
            options.config.js.includeBefore = [];

        // Include angular locale before project files, if it exists (kind of hacky way to find the right file. Is there a better way?)
        if ( options.config.locale ) {
            var localeFile = './bower_components/angular-i18n/angular-locale_' + options.config.locale.toLowerCase() + '.js';
            var momentLocaleFile = './bower_components/moment/locale/' + options.config.locale.toLowerCase() + '.js';

            if ( fs.existsSync( localeFile ) ) {
                localeFiles.unshift( localeFile );
            }
            if ( fs.existsSync( momentLocaleFile ) ) {
                localeFiles.unshift( momentLocaleFile );
            }
        } else {
            console.log( 'Mango-gulp warning: No locale has been specified for angular. Specify in config.js and run bower install angular-i18n --save.' );
        }

        console.log('---------------', options.config.js.includeBefore );

        // Target source files.
        return gulp.src( files )

            // Catch and print out all errors
            .pipe( plugins.plumber( options.error ) )

            // Wrap code within an immediately invoked function expression.
            .pipe( plugins.iife() )

            // Add Angular dependency injection annotations.
            .pipe( plugins.ngAnnotate() )

            // Include bower files.
            .pipe( plugins.addSrc.prepend( localeFiles ) )

            // Include bower files.
            .pipe( plugins.addSrc.prepend( plugins.mainBowerFiles(), {
                base: './bower_components'
            } ) )

            .pipe( plugins.addSrc.prepend( options.config.js.includeBefore ) )

            .pipe( plugins.debug() )

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
