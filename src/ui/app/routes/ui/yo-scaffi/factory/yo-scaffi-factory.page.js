'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-factory.html!text';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.factory';
const PARAMS = {
	url: '/factory',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Factory' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiFactory extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiFactory;
export {ROUTE, PARAMS};