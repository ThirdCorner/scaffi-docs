'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-build.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.build';
const PARAMS = {
	url: '/build',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Build' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiBuild extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default YoScaffiBuild;
export {ROUTE, PARAMS};