'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-install-ui.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.install-ui';
const PARAMS = {
	url: '/install-ui',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Install Ui' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiInstallUi extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiInstallUi;
export {ROUTE, PARAMS};