'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-page.html!text';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.page';
const PARAMS = {
	url: '/page',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Page' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiPage extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiPage;
export {ROUTE, PARAMS};