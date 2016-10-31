'use strict';

import {RouteConfig, Component, AbstractComponent, View} from 'scaffi-ui-core'; // jshint unused: false
import _ from 'lodash';

import hljs from 'highlightjs';

import template from './code-example.html';

//start-non-standard
@Component({
	selector: 'code-example',
})
@View({
	template: template,
	scope: {
		type: "@",
		code: "&"
	}

})
//end-non-standard


class CodeExample extends AbstractComponent{
	constructor($scope, $element, $timeout){
		super($scope);

		this.code = $scope.code();
		this.type = $scope.type;

		$timeout(()=>{
			var el = $element.find("code");
			//angular.element(el).attr("language", $scope.type);
			//angular.element(el).addClass($scope.type);
			hljs.highlightBlock(el[0]);
		},0)


		
	}
}

export default CodeExample;

