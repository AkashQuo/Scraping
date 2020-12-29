
exports.config =
{

directConnect: true, framework: 'jasmine2',
capabilities: {
  browserName: 'chrome',

  chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
   }
}
,

//  specs: ['..//spec/Baseball_spec.js'],
specs: ['..//130point_spec.js'],
// specs: ['..//spec/EBay_spec.js'],
jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000
}
,
onPrepare: async () => {
  await browser.waitForAngularEnabled(false);
    
  },
  
};
