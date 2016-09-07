'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-mode.html!text';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.mode';
const PARAMS = {
	url: '/mode',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Mode' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiMode extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiMode;
export {ROUTE, PARAMS};