'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.overview.getting-started';
const PARAMS = {
	url: '/getting-started',
	template: "<ui-view></ui-view>",
	redirectTo: "app.overview.getting-started.index",
	ncyBreadcrumb: {
		label: "Getting Started"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class GettingStarted {}

export default GettingStarted;
export {ROUTE, PARAMS};