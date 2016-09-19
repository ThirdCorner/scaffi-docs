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
	}
	getRouteMap(){
		return this.routes;
	}
	find(route){
		var splits = route.split(".");
		var searchObj = this.getRouteMap().app;
		if(splits.length && splits[0] == "app"){
			splits.shift();
		}
		while(splits && splits.length) {
			var piece = splits.shift();
			if(!_.isArray(searchObj)) {
				searchObj = searchObj.routes;
			}
			
			var found = _.find(searchObj, (item)=>{
				return item.id == piece;
			});
			
			if(!found) {
				splits = false;
			} else {
				searchObj = found;
			}
			
		}
		
		if(splits.length == 0) {
			return searchObj;
		}
		
		return null;
	}

	static factory($rootScope) {
		SitemapManager.instance = new SitemapManager($rootScope);
		return SitemapManager.instance;
	}
	
	
}

export default SitemapManager;
