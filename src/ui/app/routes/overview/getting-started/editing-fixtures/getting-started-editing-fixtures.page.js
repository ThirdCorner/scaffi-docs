'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-editing-fixtures.html';

// export-params-start
const ROUTE = 'app.overview.getting-started.editing-fixtures';
const PARAMS = {
	url: '/editing-fixtures',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Editing Fixtures' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedEditingFixtures extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getSampleData1(){
		return `
	<div class="route route-products.form">
	    <section>
	        <h1>Form {{vm.pageMode}} Page</h1>
	        <md-content>
	            <form on-submit="vm.submit()" name="form" >
	
	                <section layout="column" flex="40" flex-offset="5">
	                    <md-checkbox ng-model="vm.formItem.IsComplete" aria-label="Is Complete" ng-init="!vm.formItem.IsComplete ? vm.formItem.IsComplete = false : vm.formItem.IsComplete = vm.formItem.IsComplete ">
	                        Is Complete?
	                    </md-checkbox>
	                    <md-input-container>
	                        <label>Name</label>
	                        <input type="text" name="Name" ng-model="vm.formItem.Name" required />
	                    </md-input-container>
	                    <md-input-container>
	                        <label>Description</label>
	                        <textarea name="Description" ng-model="vm.formItem.Description" required></textarea>
	                    </md-input-container>
	
	                    <div layout="row" layout-align="end center">
	                        <md-button class="md-raised md-primary" type="submit">Submit</md-button>
	                    </div>
	                </section>
	            </form>
	        </md-content>
	    </section>
	</div>
		`;
	}
	getSampleData2(){
		return `
	ui-sref="app.products.edit({ProductsServiceID: item.id})"
		`;
	}
	getSampleData3(){
		return `
	<div style="padding: 10px; text-align: center" flex="30"><a ui-sref="app.products.add({})">Add a product</a></div>
		`;
	}

}

export default GettingStartedEditingFixtures;
export {ROUTE, PARAMS};