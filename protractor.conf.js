const TestDataEnvironment = require('./resources/test-data-environment.js');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

const testDataEnvironment = new TestDataEnvironment();

// conf.js
exports.config = {
  restartBrowserBetweenSuites: true,
  specs: ['**/*.spec.js'],
  suites: {
    workflows: 'tests/**/*.spec.js',
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars=true'],
      prefs: {
        credentials_enable_service: false,
        download: {
          prompt_for_download: false,
          default_directory: './downloads',
        },
      },
    },
  },
  jasmineNodeOpts: {},
  onPrepare() {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp/screenshots'
   }).getJasmine2Reporter());
  },
  params: testDataEnvironment,
};
