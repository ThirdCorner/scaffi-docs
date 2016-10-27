'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-stub.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.stub';
const PARAMS = {
	url: '/stub',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Stub' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiStub extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiStub;
export {ROUTE, PARAMS};