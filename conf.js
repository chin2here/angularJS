// An example configuration file.
exports.config = {
  allScriptsTimeout: 11000,

  specs: ['mocktest.js'],

 

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  useAllAngular2AppRoots: true,

   seleniumServerJar :'${selenium-standalone-jar.location}',
   baseurl: 'http://127.0.0.1:8080/#!/login',

  onPrepare: function(){
    browser.driver.manage().window().maximize();
  },


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  
  // specs: ['example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,

  }
};