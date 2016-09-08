'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.troubleshooting.sequelize';
const PARAMS = {
	url: '/sequelize',
	template: "<ui-view></ui-view>",
	redirectTo: "app.troubleshooting.sequelize.index",
	ncyBreadcrumb: {
		label: "Sequelize"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class Sequelize {}

export default Sequelize;
export {ROUTE, PARAMS};