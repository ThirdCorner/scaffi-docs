'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-start.html!text';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.start';
const PARAMS = {
	url: '/start',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Start' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiStart extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiStart;
export {ROUTE, PARAMS};