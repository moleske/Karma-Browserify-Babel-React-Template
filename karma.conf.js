module.exports = function(config) {
    config.set({
        files: [
            'node_modules/babel-polyfill/dist/polyfill.min.js',
            'spec/**/*Spec.js'
        ],
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'spec/**/*Spec.js': ['browserify']
        },
        browsers: ['PhantomJS'],
        reporters: ['dots'],
        browserify: {
            debug: true, // output source maps
            transform: ['babelify']
        }
    });
};
