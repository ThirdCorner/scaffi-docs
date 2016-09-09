'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './overview-migrations.html!text';

// export-params-start
const ROUTE = 'app.overview.migrations';
const PARAMS = {
	url: '/migrations',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Migrations' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class OverviewMigrations extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default OverviewMigrations;
export {ROUTE, PARAMS};