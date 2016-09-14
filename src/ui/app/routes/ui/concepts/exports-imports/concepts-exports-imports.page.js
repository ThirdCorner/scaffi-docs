'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './concepts-exports-imports.html!text';

// export-params-start
const ROUTE = 'app.ui.concepts.exports-imports';
const PARAMS = {
	url: '/exports-imports',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Exports Imports' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ConceptsExportsImports extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

	getCode1(){
		return `
	class StringHelper {
	
	}

	export default StringHelper;
		`;
	}
	getCode2(){
		return `
	import StringHelper from ‘../helpers/StringHelper’;
		`;
	}
	
	getCode3(){
		return `
	import template from './routes-side-nav.html!text';
		`;
	}
	getCode4(){
		return `
	import _ from 'lodash';	
		`;
	}
	getCode5(){
		return `
	import lodash from 'lodash';
		`;
	}
	getCode6(){
		return `
	var found = lodash.find(this.arr, item => {
		return item.id = null;
	}):
		`;
	}
	getCode7(){
		return `
	const ROUTE = 'app.home.index';

	@RouteConfig(ROUTE, PARAMS)
	//end-non-standard
	class HomeIndex {
		constructor(HomeService){
			this.user = null;
			HomeService.resource(1).then( user=> {
				this.user = user;
			});
		}
	
	}
	
	export default HomeIndex;
	export {ROUTE, PARAMS};
		`;
	}
	getCode8(){
		return `
	import {ROUTE} from ‘./home-index.page’;
		`;
	}
}

export default ConceptsExportsImports;
export {ROUTE, PARAMS};