'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-install-web.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.install-web';
const PARAMS = {
	url: '/install-web',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Install Web' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiInstallWeb extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiInstallWeb;
export {ROUTE, PARAMS};