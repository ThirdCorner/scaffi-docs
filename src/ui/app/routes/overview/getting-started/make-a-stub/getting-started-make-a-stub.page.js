'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-make-a-stub.html';

// export-params-start
const ROUTE = 'app.overview.getting-started.make-a-stub';
const PARAMS = {
	url: '/make-a-stub',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Make A Stub' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedMakeAStub extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getExample1(){
		return `
	<section class="stub stub-products.index.products-index-list">
	    <md-list flex="30">
	        <md-subheader class="md-no-sticky" style="padding: 10px;">{{title}} Products</md-subheader>
	        <div ng-repeat-start="item in vm.products" ui-sref="app.products.edit({ProductsServiceID: item.id})" layout="row">
	            <div flex="20" layout="row" layout-align="center center">
	                <md-icon class="fa fa-beer"></md-icon>
	            </div>
	            <div class="md-list-item-text" layout="column" flex>
	                <p style="font-weight:bold;">{{ item.Name }}</p>
	                <p>{{item.Description}}</p>
	            </div>
	        </div>
	        <md-divider ng-repeat-end ></md-divider>
	        <div ng-if="!vm.products.length" layout="row">
	
	            <div class="md-list-item-text" layout="column" layout-align="center center" flex>
	
	                <p><i>None</i></p>
	            </div>
	        </div>
	        <md-divider ng-if="!vm.products.length"></md-divider>
	    </md-list>
	</section>
`
	}
	getExample2() {
		return `
	'use strict';
	
	import {Component, View, AbstractStubPage} from 'scaffi-ui-core'; // jshint unused: false
	import _ from 'lodash';
	import template from './products-index-list.html';
	
	//start-non-standard
	@Component({
		selector: 'products-index-list',
	})
	@View({
		template: template,
		scope: {
			products: "=",
			status: "@",
			title: "@"
		}
	})
	//end-non-standard
	
	class ProductsIndexList extends AbstractStubPage {
		constructor($scope, $state){
			super($scope);
			
			
			$scope.status = $scope.status == "true" || $scope.status === true ? true : false;
			
			this.products =  _.filter($scope.products, (item)=>{
				return item.IsComplete === $scope.status;
			});
			
		}
	}
	
	export default ProductsIndexList;
`
	}
	getExample3(){
		return `
	<div class="route route-products.index">
	    <md-toolbar layout="row" class="md-primary">
	        <div class="md-toolbar-tools">
	            <span>Products</span>
	        </div>
	    </md-toolbar>
	    <md-content>
	        <div style="padding: 10px; text-align: center" flex="30"><a ui-sref="app.products.add({})">Add a product</a></div>
	        <products-index-list products="vm.products" status="false" title="Active"></products-index-list>
	    </md-content>
	
	    <md-content>
	        <products-index-list products="vm.products" status="true" title="Complete"></products-index-list>
	    </md-content>
	</div>


`
	}
}

export default GettingStartedMakeAStub;
export {ROUTE, PARAMS};