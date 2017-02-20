'use strict';

import {RouteConfig} from 'scaffi-ui-core';  // jshint unused: false

// export-params-start
const ROUTE = 'app.overview.setup-existing';
const PARAMS = {
	url: '/setup-existing',
	template: "<ui-view></ui-view>",
	redirectTo: "app.overview.setup-existing.index",
	ncyBreadcrumb: {
		label: "Setup Existing"
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard
class SetupExisting {}

export default SetupExisting;
export {ROUTE, PARAMS};