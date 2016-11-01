'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-ionic.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.ionic';
const PARAMS = {
	url: '/ionic',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Ionic' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiIonic extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiIonic;
export {ROUTE, PARAMS};