'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.ui.yo-scaffi';
const PARAMS = {
	url: '/yo-scaffi',
	template: "<ui-view></ui-view>",
	redirectTo: "app.ui.yo-scaffi.index",
	ncyBreadcrumb: {
		label: "Yo Scaffi"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class YoScaffi {}

export default YoScaffi;
export {ROUTE, PARAMS};