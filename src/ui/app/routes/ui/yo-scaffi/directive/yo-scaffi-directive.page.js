'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-directive.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.directive';
const PARAMS = {
	url: '/directive',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Directive' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiDirective extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiDirective;
export {ROUTE, PARAMS};