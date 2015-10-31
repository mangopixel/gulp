'use strict'

require( './node_modules/mango-gulp/gulpfile' )( {

    /*
     * Application configuration
     */
    url: 'https://forbrukervalget.no',
    name: 'Forbrukervalget',
    description: '',
    analyticsId: 'UA-12345678-1',

    /*
     * Notifier configuration.
     */
    notify: true,
    sound: 'Pop',

    /*
     * Server configuration.
     */
    port: 9000,

    /*
     * Path configuration.
     */
    source: 'src',
    build: 'public',

    /*
     * Favicon configuration.
     */
    favicon: 'favicon.png',

    /*
     * JavaScript configuration.
     */
    js: {
        source: 'app',
        minify: true
    },

    /*
     * Sass configuration.
     */
    sass: {
        source: 'sass',
        minify: true
    },

    /*
     * HTML configuration.
     */
    html: {
        minify: true
    }
} );