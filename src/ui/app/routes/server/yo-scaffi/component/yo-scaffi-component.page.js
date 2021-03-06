'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-component.html';

// export-params-start
const ROUTE = 'app.server.yo-scaffi.component';
const PARAMS = {
	url: '/component',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Component' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiComponent extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiComponent;
export {ROUTE, PARAMS};