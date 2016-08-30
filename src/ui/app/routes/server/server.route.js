'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.server';
const PARAMS = {
	url: '/server',
	template: "<ui-view></ui-view>",
	redirectTo: "app.server.index",
	ncyBreadcrumb: {
		label: "Server"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class Server {}

export default Server;
export {ROUTE, PARAMS};