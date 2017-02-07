'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './getting-started-server-setup.html';

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
	    "sequelize":{
	      "dialect": "mssql"
	    }
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
	getSampleSql(){
		return `
	USE [RockingForm]
	GO
	
	/****** Object:  Table [dbo].[Products]    Script Date: 9/8/2016 11:58:47 AM ******/
	SET ANSI_NULLS ON
	GO
	
	SET QUOTED_IDENTIFIER ON
	GO
	
	CREATE TABLE [dbo].[Products](
		[id] [int] IDENTITY(1,1) NOT NULL,
		[Name] [nvarchar](100) NOT NULL,
		[Description] [nvarchar](500) NOT NULL,
		[IsComplete] [bit] NOT NULL DEFAULT ((1)),
		[CreatedOn] [datetime2](7) NOT NULL,
		[UpdatedOn] [datetime2](7) NOT NULL,
		[DeletedOn] [datetime2](7) NULL,
	PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
	
	GO

		`
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
	getSampleData6(){
		return `
	"components": {
	    "sequelize":{
	      "dialect": "mssql"
	    },
	    "epilogue": {}
	},

		`
	}
}

export default GettingStartedServerSetup;
export {ROUTE, PARAMS};