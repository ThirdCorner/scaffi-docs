var path = require('path');
const root = path.dirname(__dirname);

exports.config = {

	sauceUser: process.env.sauceUser,
	sauceKey: process.env.sauceKey,

	//seleniumArgs: ['-browserTimeout=120'],
	//seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
	allScriptsTimeout: 30000,

	multiCapabilities: [{
		browserName: 'chrome',
		version: '41',
		platform: 'Windows 7',
		name: "chrome-tests",
		shardTestFiles: true,
		maxInstances: 25
	}],
	keepAlive: true,
	framework: 'mocha',
	mochaOpts:{
		reporter:'spec',
		slow:5000,
		timeout: 30000,
		enableTimeouts: false,
		fullTrace: false,
		colors: false
	},
	specs: ["app/**/*.spec.js"],
	plugins: [
		// 	{
		// 	path: './node_modules/protractor/plugins/console/index.js',
		// 	failOnWarning: true,
		// 	failOnError: true
		// }
	],
	
	/**
	 * A callback function called once protractor is ready and available,
	 * and before the specs are executed.
	 *
	 * You can specify a file containing code to run by setting onPrepare to
	 * the filename string.
	 */
	onPrepare: function() {

		var caps = browser.getCapabilities()

		//browser.driver.manage().window().setSize(1024,768);
		
		// Adds ES6 features to testing
		require('babel-register')({
			presets: [ 'es2015' ]
		});
		
		// protractor.globals = require('./src/app/globals');
		// global.TestPage = require('./src/app/core/tests/route/test-page');
		//	global.mocha = require("mocha");
		global.chai = require('chai');
		var promised = require('chai-as-promised');
		global.chai.use(promised);
		global.expect = chai.expect;

		
		/**
		 * At this point, global 'protractor' object will be set up, and
		 * jasmine will be available.
		 *
		 * The require statement must be down here, since jasmine-reporters
		 * needs jasmine to be in the global and protractor does not guarantee
		 * this until inside the onPrepare function.
		 */
		//var jasmineReporters = require('jasmine-reporters');
		//jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
		//    consolidateAll: true,
		//    filePrefix: 'xmloutput',
		//    savePath: './test-reports/e2e-test-report'
		//}));
		//
		//// Add a screenshot reporter and store screenshots to `/test/test-reports/screenshots`:
		//jasmine.getEnv().addReporter(new ScreenShotReporter({
		//    baseDirectory: './test-reports/screenshots',
		//    pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
		//        // Return '<browser>/<specname>' as path for screenshots:
		//        // Example: 'firefox/list-should work'.
		//        return path.join(capabilities.caps_.browserName, descriptions.join('-'));
		//    },
		//    takeScreenShotsOnlyForFailedSpecs: true
		//}));
	},
	onComplete: function() {

		
		var printSessionId = function(jobName){
			browser.getSession().then(function(session) {
				console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
			});
		}
		printSessionId("Scaffi Test");
	}
	// afterLaunch: function(exitCode) {
	// 	if(exitCode == 1){
	// 		console.log("TESTING HAS FAILED; KILL BUILD");
	// 		throw new Error("TESTING HAS FAILED; KILL BUILD");
	// 	}
	// }
};
