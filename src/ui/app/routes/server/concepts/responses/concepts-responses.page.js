'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './concepts-responses.html!text';

// export-params-start
const ROUTE = 'app.server.concepts.responses';
const PARAMS = {
	url: '/responses',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Responses' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ConceptsResponses extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getCode1(){
		return `
	res.send(“Good”);
		`
	}
	getCode2(){
		return `
	res.status(500).send(“Bad”);
		`
	}
	getCode3(){
		return `
	router.list("/api/getData", (req, res, next)=>{
		
		// Do logic		
		res.send(“success”);
	});
		`;
	}
	getCode4(){
		return `
	router.list("/api/getData", (req, res, next)=>{	
		// Do logic		
		res.sendSuccess(“success”);
	});
		`;
	}
	getCode5(){
		return `
	router.list("/api/getData", (req, res, next)=>{
		
		// Do logic		
		res.sendError(“An error occurred”, {stack: “I didn’t go anywhere”});
	});
		`
	}

}

export default ConceptsResponses;
export {ROUTE, PARAMS};