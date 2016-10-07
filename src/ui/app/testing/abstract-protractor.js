

class AbstractProtractor {
	
	constructor(){
		
	}
	
	getElementByXpath(xpath) {
		return element(by.xpath(xpath));
	}
}

export default AbstractProtractor;