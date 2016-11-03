'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-factory.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.factory';
const PARAMS = {
	url: '/factory',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Factory' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiFactory extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getCodeSample1(){
		return `
	'use strict';

	import {Factory} from 'scaffi-ui-core'; // jshint unused: false
	import SiteMap from '../../routes/routes.map.json';
	import _ from 'lodash';
	//start-non-standard
	@Factory({
		factoryName: 'LaunchToast'
	})
	//end-non-standard
	class LaunchToast  {
		constructor($rootScope) {
		
		}
		fireToast(){
			// I fire md-toast on page.
		}
		
		static factory($rootScope) {
			LaunchToast.instance = new LaunchToast($rootScope);
			return LaunchToast.instance;
		}
		
		
	}
	
	export default LaunchToast;
		`
	}
	getCodeSample2(){
		return `
	constructor($state, $scope, LaunchToast){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
		
		LaunchToast.fireToast();
	}
		`
	}

}

export default YoScaffiFactory;
export {ROUTE, PARAMS};