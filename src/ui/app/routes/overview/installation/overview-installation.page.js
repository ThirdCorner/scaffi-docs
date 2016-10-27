'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './overview-installation.html';

// export-params-start
const ROUTE = 'app.overview.installation';
const PARAMS = {
	url: '/installation',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Installation' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class OverviewInstallation extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default OverviewInstallation;
export {ROUTE, PARAMS};