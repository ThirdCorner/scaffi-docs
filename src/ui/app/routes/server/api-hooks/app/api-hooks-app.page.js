'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './api-hooks-app.html!text';

// export-params-start
const ROUTE = 'app.server.api-hooks.app';
const PARAMS = {
	url: '/app',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'App' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ApiHooksApp extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getCode1(){
		return `
	class Interceptor extends ScaffiServer.Extends.AbstractComponent {
		setup(app) {
			app.use(function(req, res, next){
				console.log(req.params);
			});
		}
	}
		`
	}
	getCode2(){
		return `
	{
	"dependencies": ["app"],
	"params": {
			"public": {},
			"private": {}
		}
	
	}
		`
	}

	getCode3(){
		return `
	router.get('/api/user', (req, res, next)=>{
		res.sendSuccess({name: "User"}); 
	});
		`
	}
	getCode4(){
		return `
	router.get('/api/user', (req, res, next)=>{
		res.sendForbidden("You can't access"); 
	});	
		`;
	}

	getCode5(){
		return `
	router.get('/api/user', (req, res, next)=>{
		res.sendUnauthorized("Unauthorized", {stack: "Error"}); 
	});	
		`;
	}

	getCode6() {
		return `
	router.get('/api/user', (req, res, next)=>{
		try{
			// DB call
		}catch(e){
			res.sendError(e);
		}
	});	
		`;
	}
	getCode7(){
			return `
	router.get('/api/user', (req, res, next)=>{
		res.sendNotFound("Not Found"); 
	});	
		`;
	}
}

export default ApiHooksApp;
export {ROUTE, PARAMS};