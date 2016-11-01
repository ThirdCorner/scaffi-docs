'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-uninstall-ui.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.uninstall-ui';
const PARAMS = {
	url: '/uninstall-ui',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Uninstall Ui' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiUninstallUi extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiUninstallUi;
export {ROUTE, PARAMS};