'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-route-setup.html!text';

// export-params-start
const ROUTE = 'app.overview.getting-started.route-setup';
const PARAMS = {
	url: '/route-setup',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Route Setup' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedRouteSetup extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	
	}
	getSampleOne(){
		return ` 
	<div class="route route-products.index">
        <md-toolbar layout="row" class="md-primary">
            <div class="md-toolbar-tools">
                <span>Products</span>
            </div>
        </md-toolbar>
    </div>
		`;
	}
	getSampleTwo(){
		return ` 
    <div class="route route-index">
        <section>
            <h1>Index Page</h1>
        </section>

        <a ui-sref="app.products">Go to Products</a>
    </div>
		`;
	}
	getSampleThree(){
		return ` 
	<div class="route route-products.index">
        <md-toolbar layout="row" class="md-primary">
            <div class="md-toolbar-tools">
                <span>Products</span>
            </div>
        </md-toolbar>
        <md-content>
            <md-list flex="30">
                <md-subheader class="md-no-sticky" style="padding: 10px;">Active Products</md-subheader>
                <div ng-repeat-start="item in vm.products | filter:{IsComplete: false}" ng-click="null" layout="row">
                    <div flex="20" layout="row" layout-align="center center">
                        <md-icon class="fa fa-beer"></md-icon>
                    </div>
                    <div class="md-list-item-text" layout="column" flex>
                        <p style="font-weight:bold;">{{ item.Name }}</p>
                        <p>{{item.Description}}</p>
                    </div>
                </div>
                <md-divider ng-repeat-end ></md-divider>
                <div ng-if="!vm.hasActiveProducts()" layout="row">

                    <div class="md-list-item-text" layout="column" layout-align="center center" flex>

                        <p><i>None</i></p>
                    </div>
                </div>
                <md-divider ng-if="!vm.hasActiveProducts()"></md-divider>
            </md-list>
        </md-content>

        <md-content>
            <md-list flex="30">
                <md-subheader class="md-no-sticky" style="padding: 10px;">Completed Products</md-subheader>
                <div ng-repeat-start="item in vm.products | filter:{IsComplete: true}" ng-click="null" layout="row">
                    <div flex="20" layout="row" layout-align="center center">
                        <md-icon class="fa fa-beer"></md-icon>
                    </div>
                    <div class="md-list-item-text" layout="column" flex>
                        <p style="font-weight:bold;">{{ item.Name }}</p>
                        <p>{{item.Description}}</p>
                    </div>
                </div>
                <md-divider ng-repeat-end ></md-divider>
                <div ng-if="!vm.hasCompletedProducts()" layout="row">

                    <div class="md-list-item-text" layout="column" layout-align="center center" flex>

                        <p><i>None</i></p>
                    </div>
                </div>
                <md-divider ng-if="!vm.hasCompletedProducts()"></md-divider>
            </md-list>
        </md-content>
    </div>
		`;
	}
	getSampleFour(){
		return `
	'use strict';

	import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; 
	import template from './products-index.html!text';
	
	import _ from 'lodash';
	
	/* export-params-start */
	const ROUTE = 'app.products.index';
	const PARAMS = {
		url: '/',
		template: template,
		resolve: {
			products: (ProductsService) => ProductsService.get()
		},
		ncyBreadcrumb: {
			 skip: true 
		}
	};
	/* export-params-end */
	
	/* start-non-standard */
	@RouteConfig(ROUTE, PARAMS)
	/* end-non-standard */
	
	class ProductsIndex extends AbstractPage {
		constructor($state, $scope, products){
			super($scope);
			
			this.$state = $state;
			this.$scope = $scope;
	
			this.products = products;
		}
	
		hasActiveProducts(){
			return _.filter(this.products, (item)=>{
				return item.IsComplete === false;
			}).length ? true : false;
		}
		hasCompletedProducts(){
			return _.filter(this.products, (item)=>{
				return item.IsComplete === true;
			}).length ? true : false;
		}
	}
	
	export default ProductsIndex;
	export {ROUTE, PARAMS};

		`
	}

}

export default GettingStartedRouteSetup;
export {ROUTE, PARAMS};