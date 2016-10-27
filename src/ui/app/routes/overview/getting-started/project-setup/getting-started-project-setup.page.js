'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-project-setup.html';

// export-params-start
const ROUTE = 'app.overview.getting-started.project-setup';
const PARAMS = {
	url: '/project-setup',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Project Setup' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedProjectSetup extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default GettingStartedProjectSetup;
export {ROUTE, PARAMS};