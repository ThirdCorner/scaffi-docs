'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './sequelize-connection.html';

// export-params-start
const ROUTE = 'app.troubleshooting.sequelize.connection';
const PARAMS = {
	url: '/connection',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Connection' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class SequelizeConnection extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

}

export default SequelizeConnection;
export {ROUTE, PARAMS};