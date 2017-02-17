'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-installing-packages.html';

// export-params-start
const ROUTE = 'app.overview.getting-started.installing-packages';
const PARAMS = {
	url: '/installing-packages',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Installing Packages' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedInstallingPackages extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getExample1(){
		return `
	import 'ng-idle';

	class Theme extends AbstractMaterial {
`
	}
	getExample2(){
		return `
	initialize(){
		this.addRequires([
			'ngMaterial',
			'angular-loading-bar',
			'ngIdle'
		]);

		this.getApp().config((IdleProvider, KeepaliveProvider) => {
		    // configure Idle settings
		    IdleProvider.idle(5); // in seconds
		    IdleProvider.timeout(5); // in seconds
		    KeepaliveProvider.interval(2); // in seconds
		});
		
		this.getApp().run((Idle)=>{
		// start watching when the app runs. also starts the Keepalive service by default.
		    Idle.watch();
		});
		
		
`;
		
	}
	getExample3(){
		return `
	var app = angular.module('demo', ['ngIdle']);

	app.config(function(IdleProvider, KeepaliveProvider) {
	    // configure Idle settings
	    IdleProvider.idle(5); // in seconds
	    IdleProvider.timeout(5); // in seconds
	    KeepaliveProvider.interval(2); // in seconds
	})
	.run(function(Idle){
	    // start watching when the app runs. also starts the Keepalive service by default.
	    Idle.watch();
	});
	
`
	}
	getExample4(){
		return `
	class ProductsForm extends AbstractPage {
		constructor($scope, $state, formItem, pageMode, ProductsService, $mdDialog){
			super($scope);
	
			this.SERVICE = ProductsService;
			this.$state = $state;
			this.$scope = $scope;
			this.pageMode = pageMode;
			this.formItem = formItem;
			
			$scope.$on('IdleTimeout', function() {
				$mdDialog.show(
					$mdDialog.alert()
						.title("Idle Detected")
						.textContent("You've been idle for 5 seconds. Punishment will follow via cake.")
						.ok("Send Cake")
				);
				
			});
			
		}
		
		submit(){
			this.SERVICE.save(this.formItem).then(() => {
				this.$state.go("app.products", {});
			});
		}
		
	}

`
	}
}

export default GettingStartedInstallingPackages;
export {ROUTE, PARAMS};