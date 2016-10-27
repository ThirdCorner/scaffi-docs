'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-service.html';

// export-params-start
const ROUTE = 'app.server.yo-scaffi.service';
const PARAMS = {
	url: '/service',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Service' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiService extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiService;
export {ROUTE, PARAMS};