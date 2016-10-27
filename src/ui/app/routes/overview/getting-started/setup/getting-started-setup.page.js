'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-setup.html';

// export-params-start
const ROUTE = 'app.overview.getting-started.setup';
const PARAMS = {
	url: '/setup',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Setup' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedSetup extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default GettingStartedSetup;
export {ROUTE, PARAMS};