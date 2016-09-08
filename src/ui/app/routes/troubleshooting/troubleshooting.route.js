'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.troubleshooting';
const PARAMS = {
	url: '/troubleshooting',
	template: "<ui-view></ui-view>",
	redirectTo: "app.troubleshooting.index",
	ncyBreadcrumb: {
		label: "Troubleshooting"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class Troubleshooting {}

export default Troubleshooting;
export {ROUTE, PARAMS};