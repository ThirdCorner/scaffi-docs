'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './concepts-configuration.html';

// export-params-start
const ROUTE = 'app.server.concepts.configuration';
const PARAMS = {
	url: '/configuration',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Configuration' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ConceptsConfiguration extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

	getCode1(){
		return `
	require('scaffi-server-core').initialize();
		`
	}
	getCode2(){
		return `
	require('scaffi-server-core').initialize({
		config: {
			environment:  process.env["ENV"]
			
		}
	});
		`
	}
}

export default ConceptsConfiguration;
export {ROUTE, PARAMS};