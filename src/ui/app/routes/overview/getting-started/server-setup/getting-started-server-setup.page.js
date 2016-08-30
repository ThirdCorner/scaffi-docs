'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-server-setup.html!text';

// export-params-start
const ROUTE = 'app.overview.getting-started.server-setup';
const PARAMS = {
	url: '/server-setup',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 label: 'Server Setup' 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class GettingStartedServerSetup extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getSampleData1(){
		return `
	"components": {
	    "app": {
	      "port": 3000
	    },
	    "sequelize":{
	      "dialect": "mssql"
	    },
	    "epilogue": {}
	},

		`
	}
	getSampleData2(){
		return `
	{
	  "config": {
	    "environment": "localhost"
	  },
	  "components": {
	    "sequelize": {
	      "host": "localhost",
	      "username": "admin",
	      "password": "pass",
	      "databaseName": "RockingForm",
	      "instance": "sqlexpress"
	    }
	  }
	}
		`
	}
	getSampleData3(){
		return `
	{
		id: 1,
		Name: "SlingSling",
		Description: "It slings, it dings, it ringarings",
		IsComplete: false
	}
		`;
	}
	getSampleData4(){
		return `
	module.exports = function(sequelize, DataTypes) {
		return sequelize.define('Products', {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			Name: {
				type: DataTypes.STRING(100),
				allowNull: false
			},
			Description: {
				type: DataTypes.STRING(500),
				allowNull: false
			},
			IsComplete: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: 1
			}
		}, {
			name:  {plural: "Products", singular: "Products"},
			freezeTableName: true,
			classMethods: {
				// associate: function(models){
				// 	this.hasMany(models.Route, { onDelete: 'cascade', hooks: true });
				// }
			}
			
		})
	};
		`;
	}
	getSampleData5(){
		return `
	module.exports = function(db, epilogue, io) {
	
		// Create REST resource
		var ParamResource = epilogue.resource({
			model: db.Products,
			endpoints: ['/api/products', '/api/products/:id']
		});
		
		// ModelExtensions(io, ParamResource, "Param");
		
		return ParamResource;
	};
		`;
	}
}

export default GettingStartedServerSetup;
export {ROUTE, PARAMS};