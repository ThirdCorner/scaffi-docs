'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './concepts-classes.html';

// export-params-start
const ROUTE = 'app.ui.concepts.classes';
const PARAMS = {
	url: '/classes',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Classes' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ConceptsClasses extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}

	getCode1(){
		return `
	class StringHelper {
		constructor(){
	
		}
	}

	export default StringHelper;
		`
	}
	getCode2(){
		return `
	
	file: app/helpers/string-helper.js
	
	'use strict';
	
	class StringHelper {
		constructor(){
	
		}
		parseAsNumber(str){
			return parseInt(str, 10);
		}
		removeSpaces(str){
			return str.replace(‘ ‘, ‘’);
		}
	}
	export default StringHelper;

		`
	}
	getCode3(){
		return `
	‘use strict’;

	import {RouteConfig} from ‘app/ng-decorators’;
	
	import StringHelper from ‘app/core/helpers/StringHelper’;
	import template from './starting-index.html';
	
	const ROUTE = 'app.starting.index;
	const PARAMS = {
		url: '/,
		template: template,
		resolve: {
	
		},
		ncyBreadcrumb: {
			skip: true
		}
	
	};
	
	//start-non-standard
	@RouteConfig(ROUTE, PARAMS)
	//end-non-standard
	
	
	class StartingIndex {
		constructor(){
			this.stringHelper = new StringHelper();
		}
	
	}
	
	export default StartingIndex;
	export {ROUTE, PARAMS};
		`;

	}
	getCode4(){
		return `
	import StringHelper from ‘app/helpers/StringHelper’;
		`
	}
	getCode5(){
		return `
	constructor(){
		this.stringHelper = new StringHelper();
	}
		`;
	}
	
}

export default ConceptsClasses;
export {ROUTE, PARAMS};