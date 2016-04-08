'use strict'

var paths = {
    source: 'src',
    build: 'public'
};

require( 'mango-gulp' )( {

    /*
     * Application configuration.
     */
    name: 'Forbrukervalget',
    description: '',
    url: 'https://forbrukervalget.no',
    analyticsId: 'UA-12345678-1',

    /*
     * Language settings
     */
    locale: 'no',

    /*
     * Server configuration.
     */
    port: 9000,

    /*
     * Path configuration.
     */
    source: paths.source,
    build: paths.build,

    /*
     * Favicon configuration.
     */
    favicon: 'favicon.png',

    /*
     * JavaScript configuration.
     */
    js: {
        source: 'app',
        minify: true,
        revise: true,
        includeBefore: [],
        includeAfter: []
    },

    /*
     * Sass configuration.
     */
    sass: {
        source: 'sass',
        minify: true,
        revise: true
    },

    /*
     * HTML configuration.
     */
    html: {
        minify: true
    },

    /*
     * Notifier configuration.
     */
    notify: true,
    sound: 'Pop',

    /*
     * Gulp configuration.
     */
    defaultTask: [ 'lint:js', 'clean', 'build', 'revise', 'watch', 'serve', 'build:favicons', 'minify:html' ]

} );
