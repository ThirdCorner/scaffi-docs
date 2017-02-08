'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './yo-scaffi-install-mobile.html';

// export-params-start
const ROUTE = 'app.ui.yo-scaffi.install-mobile';
const PARAMS = {
	url: '/install-mobile',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Install Mobile' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class YoScaffiInstallMobile extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	
	getCodeSample1(){
		return `
	'use strict';

	import {AbstractBootstrap} from 'scaffi-ui-core';
	import ScaffiUi from 'scaffi-ui-core';
	
	import 'ionic-angular/release/js/ionic.js';
	import 'ionic-angular/release/js/ionic-angular.js';
	 
	class Theme extends AbstractBootstrap {
		initialize(){
			this.addRequires([
				'ui.bootstrap',
				'angular-loading-bar',
			]);

			
			if(ScaffiUi.config.isMobilePlatform()){
				this.addRequires(['ionic', 'ion-autocomplete']);
			}
		}
	}

	export default Theme;
		`
	}

}

export default YoScaffiInstallMobile;
export {ROUTE, PARAMS};