import AbstractProtractor from './abstract-protractor';

class Form extends AbstractProtractor {
	constructor(){
		super();
	}
	fill(name, fixture) {
		var form = this.getFormElement(name);
		expect(form.isPresent(), `EXPECT: form name=${name} to exist`).to.eventually.be.true;
	}
	getFormElement(name){
		return this.getElementByXpath(`//form[@name='${name}']`);
	}
	
}

var form = new Form();

export default form;