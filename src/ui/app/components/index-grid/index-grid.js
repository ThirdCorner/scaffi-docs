'use strict';

import {RouteConfig, Component, AbstractComponent, View} from 'scaffi-ui-core'; // jshint unused: false
import _ from 'lodash';

import template from './index-grid.html!text';

//start-non-standard
@Component({
	selector: 'index-grid',
})
@View({
	template: template,
	scope: {
		route: "="
	}

})
//end-non-standard


class IndexGrid extends AbstractComponent{
	constructor($scope, SitemapManager){
		super($scope);
		this.route = $scope.route;
		if(this.route.endsWith(".index")){
			this.route = this.route.substr(0, this.route.lastIndexOf(".index"));
		}
		this.subRoutes = [];
		this.parentRoute = SitemapManager.find(this.route);
		if(this.parentRoute) {
			this.subRoutes = this.parentRoute.routes;
		}
		
	}
}

export default IndexGrid;

