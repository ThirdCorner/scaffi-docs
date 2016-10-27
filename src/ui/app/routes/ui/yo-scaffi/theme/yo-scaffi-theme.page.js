'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-theme.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.theme';
const PARAMS = {
	url: '/theme',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Theme' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiTheme extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiTheme;
export {ROUTE, PARAMS};