'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-install-android.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.install-android';
const PARAMS = {
	url: '/install-android',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Install Android' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiInstallAndroid extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiInstallAndroid;
export {ROUTE, PARAMS};