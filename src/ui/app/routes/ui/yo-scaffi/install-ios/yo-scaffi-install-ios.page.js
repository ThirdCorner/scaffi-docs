'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-install-ios.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.install-ios';
const PARAMS = {
	url: '/install-ios',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Install Ios' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiInstallIos extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiInstallIos;
export {ROUTE, PARAMS};