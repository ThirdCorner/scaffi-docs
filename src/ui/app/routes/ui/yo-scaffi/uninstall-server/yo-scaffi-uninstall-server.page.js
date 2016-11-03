'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-uninstall-server.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.uninstall-server';
const PARAMS = {
	url: '/uninstall-server',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Uninstall Server' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiUninstallServer extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiUninstallServer;
export {ROUTE, PARAMS};