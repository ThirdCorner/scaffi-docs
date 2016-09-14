'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.ui.concepts';
const PARAMS = {
	url: '/concepts',
	template: "<ui-view></ui-view>",
	redirectTo: "app.ui.concepts.index",
	ncyBreadcrumb: {
		label: "Concepts"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class Concepts {}

export default Concepts;
export {ROUTE, PARAMS};