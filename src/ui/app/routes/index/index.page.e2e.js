'use strict';
import session from '../../testing/session';
import request from 'request';
import form from '../../testing/form';
describe("Test Form", ()=>{
	describe("Test Browse", ()=>{
		it("should have browsed", ()=>{
			session.start("/overview");
		});
		it("should have logo", ()=>{
			expect(element(by.id("logo")).isPresent(), "Has Logo").to.eventually.be.true;
		});
		it("should have specific logo", ()=>{
			expect(element(by.tagName("h4")).getText()).to.eventually.equal("Overview");
		});
		it("should find form",()=>{
			form.fill("_form", {});
		});
		
	});
	describe("Test Call", ()=>{
		it("should make server call", (done)=>{
			request({method: "GET", json: true, uri: session.getBaseUrl() + '/api/users'},(error, response, body)=>{

				expect(body).to.eql([{id: 1, name: "John"}]);
				done();
			});
		});
		it("should equal again", ()=>{
			expect(2).to.equal(2);
		})

	});

});
