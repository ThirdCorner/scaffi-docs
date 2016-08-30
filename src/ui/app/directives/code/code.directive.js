'use strict';

import {Directive} from 'scaffi-ui-core'; // jshint unused: false;
//start-non-standard
@Directive({
	selector: 'code'
})
//end-non-standard
class Code {
	/*
		If you add constructor injectors, you need to add them to the directiveFactory portion as well
		Otherwise, you'll get an injection error
	 */
	constructor($rootScope, $state){
		this.restrict = 'E';
		this.scope = {
			template: "="
		};



	}

	link(scope, element, attrs, ngModel){
		element[0].innerText = scope.template;

		hljs.highlightBlock(element[0]);
		
	}

	static directiveFactory($rootScope, $state){

		Code.instance = new Code($rootScope, $state);
		return Code.instance;
	}
}

export default Code;

