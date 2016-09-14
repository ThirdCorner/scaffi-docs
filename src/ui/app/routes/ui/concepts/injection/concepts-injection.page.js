'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './concepts-injection.html!text';

// export-params-start
const ROUTE = 'app.ui.concepts.injection';
const PARAMS = {
	url: '/injection',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Injection' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ConceptsInjection extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getCode1(){
		return `
	class BillingReportIndex{
		constructor($scope, $state){
			this.$state = $state;
		}
	}
		`;
	}
	getCode2(){
		return `
	class BillingReportIndex{
		constructor($scope, $state, BillingReportService){
			this.$state = $state;
			this.SERVICE = BillingReportService;
		}
	
		addInvoice(){
			this.SERVICE.addInvoice();
		}
	}
		`;
	}
	getCode3(){
		return `
	class BillingReportIndex{
		constructor($scope, $state, $injector){
			this.$state = $state;
			this.SERVICE = $injector.get(“BillingReportService”);
		}
		
		addInvoice(){
			this.SERVICE.addInvoice();
		}
	}

		`
	}
}

export default ConceptsInjection;
export {ROUTE, PARAMS};