'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.ui';
const PARAMS = {
	url: '/ui',
	template: "<ui-view></ui-view>",
	redirectTo: "app.ui.index",
	ncyBreadcrumb: {
		label: "Ui"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class Ui {}

export default Ui;
export {ROUTE, PARAMS};