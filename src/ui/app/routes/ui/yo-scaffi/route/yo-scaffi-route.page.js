'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-route.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.route';
const PARAMS = {
	url: '/route',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Route' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiRoute extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiRoute;
export {ROUTE, PARAMS};