'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './concepts-pages.html!text';

// export-params-start
const ROUTE = 'app.ui.concepts.pages';
const PARAMS = {
	url: '/pages',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Pages' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ConceptsPages extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getCode1(){
		return `
	angular.module('billingModule').controller("billingReportController", billingReportController);

	function billingReportController($scope, $state, billingService) {
	    var vm = {
	        myChartOptions: getMyChartOptions(),
	        myData: [],
	        noData: false,
		goToItem: goToItem
	    };
	
	    init();
	
	    function init() {
			$scope.vm = vm;
		
	    }
	    
	    function goToItem(item) {
			$state.go(‘app.billingReport.item’, {id: item.id});
	    }
	}
		`
	}
	getCode2(){
		return `
	$stateProvider
        .state('billingReport', {
            url: '/billingReport',
            parent: 'app',
            data: {title: 'Billing Residual' },
            templateUrl: 'components/billing/billingReport/billingReport.html',
            controller: 'billingReportController'
        })	
		`;
	}
	getCode3(){
		return `
	'use strict';

	import {RouteConfig} from 'app/ng-decorators'; // jshint unused: false
	import template from './billing-report-index.html!text';
	
	// export-params-start
	const ROUTE = 'app.billing-report.index';
	const PARAMS = {
		url: '/',
		template: template,
		resolve: {
	
		},
		ncyBreadcrumb: {
			skip: true
		}
	};
	// export-params-end
	
	//start-non-standard
	@RouteConfig(ROUTE, PARAMS)
	//end-non-standard
	
	class BillingReportIndex{
		constructor($scope, $state){
			this.myChartOptions = getMyChartOptions();
			this.myData = [];
			this.noData = false;
			this.$state = $state;
	
		}
		getMyChartOptions(){
			// Code
		}
		goToItem(item){
			this.$state.go(“app.billing-report.item”, {id: item.id});
		}
	
	}
	
	export default BillingReportIndex;
	export {ROUTE, PARAMS};
	`;
	}
	getCode4(){
		return `
	<div class=”page app.billing-report.index-page”>
		<ul>
			<li ng-repeat=”item in vm.myData” ng-click=”vm.goToItem(item)”>
				{{item.name}}
			</li>
		</ul>
	
	</div>
		`;
	}
}

export default ConceptsPages;
export {ROUTE, PARAMS};