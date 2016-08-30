'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-fixture-setup.html!text';

// export-params-start
const ROUTE = 'app.overview.getting-started.fixture-setup';
const PARAMS = {
	url: '/fixture-setup',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Fixture Setup' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedFixtureSetup extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getSampleData1(){
		return `
	"COLLECTION": [

		{
			id: 1,
			Name: "SlingSling",
			Description: "It slings, it dings, it ringarings",
			IsComplete: false
		}
	]
		`
	}
	getSampleData2(){
		return `
	{
		id: 2,
		Name: "Mindy Rock",
		Description: "The rock then mends your mindminds",
		IsComplete: true
	}
		`
	}

}

export default GettingStartedFixtureSetup;
export {ROUTE, PARAMS};