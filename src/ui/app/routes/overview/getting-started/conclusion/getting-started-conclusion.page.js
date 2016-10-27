'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-conclusion.html';

// export-params-start
const ROUTE = 'app.overview.getting-started.conclusion';
const PARAMS = {
	url: '/conclusion',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Conclusion' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedConclusion extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default GettingStartedConclusion;
export {ROUTE, PARAMS};