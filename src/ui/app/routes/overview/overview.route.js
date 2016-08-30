'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.overview';
const PARAMS = {
	url: '/overview',
	template: "<ui-view></ui-view>",
	redirectTo: "app.overview.index",
	ncyBreadcrumb: {
		label: "Overview"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class Overview {}

export default Overview;
export {ROUTE, PARAMS};