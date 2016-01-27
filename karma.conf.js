/*
 * Returns Karma config
 */
module.exports = function(config) {
  config.set({
    // Set the browser
    browsers   : ["PhantomJS"],
    // Set framework testing
    frameworks : ["browserify", "jasmine"],
    // Log level
    logLevel: 'LOG_DEBUG',
    // Files to watch
    files      : [
      "src/**/*.js",
      "test/**/*.spec.js"
    ],
    preprocessors: {
      // Use babel preprocessors
      "src/**/*.js":       [ "browserify" ],
      "test/**/*.spec.js": [ "browserify" ]
    },
    // Babel preprocessor config
    babelPreprocessor: {
    },
    // browserify preprocessor
    browserify: {
      debug: true,
      transform: ["babelify"]
    }
  });
};
