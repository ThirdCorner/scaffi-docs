'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-install-mobile.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.install-mobile';
const PARAMS = {
	url: '/install-mobile',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Install Mobile' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiInstallMobile extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiInstallMobile;
export {ROUTE, PARAMS};