'use strict'

/*
 * Import Gulp and configurations.
 */
var gulp = require( 'gulp' );
var config = require( './gulp/config' );

/*
 * Import Gulp plugins and other node modules.
 */
var plugins = require( 'load-plugins' )( '*' );

/*
 * Define options getting passed to the Gulp tasks.
 */
var options = {
    pattern: 'gulp/tasks/**/*.js',
    config: config,
    error: {
        errorHandler: plugins.notify.onError( {
            message: 'Error: <%= error.message %>',
            sound: config.sound
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
    plugins.sequence( 'clean', 'build', 'revise', 'watch', 'serve', 'build:favicons', 'minify:html' )( callback );
} );