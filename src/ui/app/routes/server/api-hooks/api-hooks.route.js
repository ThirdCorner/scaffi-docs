'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.server.api-hooks';
const PARAMS = {
	url: '/api-hooks',
	template: "<ui-view></ui-view>",
	redirectTo: "app.server.api-hooks.index",
	ncyBreadcrumb: {
		label: "Api Hooks"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class ApiHooks {}

export default ApiHooks;
export {ROUTE, PARAMS};