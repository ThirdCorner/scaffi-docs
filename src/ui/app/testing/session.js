import chai from 'chai';
import promised from "chai-as-promised";
chai.use(promised);
var expect = chai.expect;
import _ from "lodash";
//import ScaffiUi from 'scaffi-ui-core';

class Session {
	constructor(){
		this.clearSession();
		this.baseUrl = "http://scaffi-docs-qa.azurewebsites.net";
		//this.baseUrl = ScaffiUi.config.getBaseUrl() || ScaffiUi.config.getLocalhostAddress();
	}
	clearSession(){
		this.session = {};
	}
	getBaseUrl() {
		return this.baseUrl;
	}
	go(url){
		this.clearSession();
		url = url || "";
		if(url.length && !_.startsWith(url, "/")) {
			url += "/" + url;
		}
		browser.get(this.baseUrl + url );

		if(url.length) {
			expect(browser.getCurrentUrl()).to.eventually.contains(url);
		} else {
			expect(browser.getCurrentUrl()).to.eventually.contains(this.baseUrl);
		}
		
		browser.getCurrentUrl().then((url)=>{
			this.set("currentUrl", url);
		});

	}
	set(name, value){
		this.session[name] = value;
	}
	get(name){
		if(_.has(this.session, name)){
			return this.session[name];
		}

		return null;
	}

}

var session = new Session();
export default session;