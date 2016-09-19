'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.server.concepts.components';
const PARAMS = {
	url: '/components',
	template: "<ui-view></ui-view>",
	redirectTo: "app.server.concepts.components.index",
	ncyBreadcrumb: {
		label: "Components"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class Components {}

export default Components;
export {ROUTE, PARAMS};