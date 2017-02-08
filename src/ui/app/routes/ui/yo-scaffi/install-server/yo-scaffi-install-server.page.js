'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-install-server.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.install-server';
const PARAMS = {
	url: '/install-server',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Install Server' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiInstallServer extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getCodeSample1(){
		return `
	import _ from 'lodash';
	module.exports = function(app, router, items) {
		var found = _.find(items, (item)=>{
			return item.public;
		});
	}
		`;
	}
}

export default YoScaffiInstallServer;
export {ROUTE, PARAMS};