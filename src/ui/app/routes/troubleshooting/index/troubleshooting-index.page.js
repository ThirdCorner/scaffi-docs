'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './troubleshooting-index.html';

// export-params-start
const ROUTE = 'app.troubleshooting.index';
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

class TroubleshootingIndex extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
		this.ROUTE = ROUTE;
	}

}

export default TroubleshootingIndex;
export {ROUTE, PARAMS};