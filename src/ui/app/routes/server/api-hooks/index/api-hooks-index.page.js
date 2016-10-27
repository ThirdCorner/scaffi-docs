'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './api-hooks-index.html';

// export-params-start
const ROUTE = 'app.server.api-hooks.index';
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

class ApiHooksIndex extends AbstractPage {
	constructor($state, $scope){
		super($scope);

		this.ROUTE = ROUTE;
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default ApiHooksIndex;
export {ROUTE, PARAMS};