'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './concepts-routes.html';

// export-params-start
const ROUTE = 'app.ui.concepts.routes';
const PARAMS = {
	url: '/routes',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Routes' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ConceptsRoutes extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getCode1(){
		return `
	(function () {

	    angular.module('billingModule', []).config(function ($urlRouterProvider, $stateProvider) {
	        $stateProvider
	            .state('billingReport', {
	                url: '/billingReport',
	                parent: 'app',
	                data: {title: 'Billing Residual' },
	                templateUrl: 'components/billing/billingReport/billingReport.html',
	                controller: 'billingReportController'
	            })
	    });
	}());
		`;
	}
	getCode2(){
		return `
	'use strict';

	import {RouteConfig} from 'app/ng-decorators';  // jshint unused: false
	
	const ROUTE = 'app.billing-report;
	const PARAMS = {
		url: '/billing-report,
		template: "<ui-view></ui-view>",
		redirectTo: "app.billing-report.index",
		ncyBreadcrumb: {
			label: "Billing Residual"
		}
	};
	
	//start-non-standard
	@RouteConfig(ROUTE, PARAMS)
	//end-non-standard
	class BillingReport {
		constructor(){
	
	}
	}
	
	export default BillingReport;
	export {ROUTE, PARAMS};
		`
	}
}

export default ConceptsRoutes;
export {ROUTE, PARAMS};