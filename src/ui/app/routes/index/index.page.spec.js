'use strict';

describe("Test Form", ()=>{
	it("should run this test", ()=>{
		expect(2).to.equal(2);
	});
	describe("Test Browse", ()=>{
		before(()=>{
			browser.get("http://scaffi-docs.azurewebsites.net");
		});
		it("should have browsed", ()=>{
			expect(element(by.id("logo")).isPresent()).to.eventually.be.true;
		})
		it("should have browsed", ()=>{
			expect(element(by.id("spazzy")).isPresent()).to.eventually.be.true;
		})
		
	});

});
