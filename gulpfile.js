'use strict'

/*
 * Import Gulp.
 */
var gulp = require( 'gulp' );

/*
 * Import Gulp plugins and other node modules.
 */
var plugins = require( 'gulp-load-plugins' )( {
    pattern: '*',
    scope: 'dependencies'
} );

module.exports = function( config ) {

    /*
     * Define options getting passed to the Gulp tasks.
     */
    var options = {
        pattern: 'node_modules/mango-gulp/tasks/**/*.js',
        config: config,
        error: {
            errorHandler: plugins.notify.onError( function (error) {
                return {
                    sound: 'Pop',
                    title: 'Gulp Error',
                    message: '<%= error.plugin %>: <%= error.message %>'
                };
            } )
        }
    }

    /*
     * Import Gulp tasks.
     */
    require( 'load-gulp-tasks' )( gulp, options, plugins );

    /*
     * Define default task.
     */
    gulp.task( 'default', function( callback ) {
        plugins.sequence( 'lint:js', 'clean', 'build', 'revise', 'watch', 'serve', 'build:favicons', 'minify:html' )( callback );
    } );

}