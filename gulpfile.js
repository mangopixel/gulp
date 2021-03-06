'use strict'

/*
 * Import Gulp.
 */
var gulp = require( 'gulp' );
var argv = require( 'yargs' ).argv

/*
 * Import Gulp plugins and other node modules.
 */
var plugins = require( 'gulp-load-plugins' )( {
    pattern: '*',
    scope: 'dependencies'
} );

module.exports = function ( config ) {

    /*
     * Define options getting passed to the Gulp tasks.
     */
    var options = {
        pattern: 'node_modules/mango-gulp/tasks/**/*.js',
        config: config,
        error: {
            errorHandler: plugins.notify.onError( function ( error ) {
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

    if ( argv.deploy ) {
        config.defaultTask = config.defaultTask.filter( function ( task ) {
            return ! ( task === 'watch' || task === 'serve' );
        } );
    }

    /*
     * Define default task.
     */
    gulp.task( 'default', function ( callback ) {
        plugins.sequence.apply( this, config.defaultTask )( callback );
    } );

}