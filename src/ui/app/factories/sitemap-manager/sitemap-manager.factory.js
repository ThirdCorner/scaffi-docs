'use strict';

import {Factory} from 'scaffi-ui-core'; // jshint unused: false
import SiteMap from '../../routes/routes.map.json!json';
import _ from 'lodash';
//start-non-standard
@Factory({
	factoryName: 'SitemapManager'
})
//end-non-standard
class SitemapManager  {
	constructor($rootScope) {
		this.routes = SiteMap;
		console.log(SiteMap);
	}
	getRouteMap(){
		return this.routes;
	}
	

	static factory($rootScope) {
		SitemapManager.instance = new SitemapManager($rootScope);
		return SitemapManager.instance;
	}
	
	
}

export default SitemapManager;
