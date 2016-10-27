'use strict';

import {RouteConfig, AbstractPage} from 'scaffi-ui-core'; // jshint unused: false
import template from './components-index.html';

// export-params-start
const ROUTE = 'app.server.concepts.components.index';
const PARAMS = {
	url: '/',
	template: template,
	resolve: {

	},
	ncyBreadcrumb: {
		 skip: true 
	}
};
// export-params-end

//start-non-standard
@RouteConfig(ROUTE, PARAMS)
//end-non-standard

class ComponentsIndex extends AbstractPage {
	constructor($state, $scope){
		super($scope);
		
		this.$state = $state;
		this.$scope = $scope;
	}
	getCode1(){
		return `
	{
		dependencies: ['component-name', ...],
		params: {
			public: { 
				'param-name': {
					'type': [text, number, boolean, list] // What type of value to accept when installing.
				
				}
			}
			private: { // Same structure as public}
		}
	}

		`
	}
	getCode2(){
		return `
	{
		dependencies: ['app', 'redis-connect'],
		params: {
			public: {
				“secretKey”: {
					“type”: “'text”
				},
				“resave”: {
					“type”: “boolean”
				},
				“saveUnitialized”: {
					“type”: “'boolean”
				}
			}	
		}
		`;
	}
	getCode3(){
		return `
	'use strict';

	import ScaffiServer from 'scaffi-server-core';
	import session from 'express-session';
	
	class Session extends ScaffiServer.Extends.AbstractComponent {
		setup(app, redisConnect) {
			var config = {
				secret: this.getParam("secretKey"),
				store: redisConnect.registerStore(session),
				cookie: {maxAge: 60000},
				resave: this.getParam("resave"),
				saveUninitialized: this.getParam("saveUninitialized")
			};
			var createdSession = session(config);
			app.use(createdSession);
	
			return createdSession;
		}
	
	}
	
	export default Session;
		`;		
	}
	getCode4(){
		return `
	{
		dependencies: ['bull', 'router']
		params: {
			public: {},
			private: {}
		}
	}
		`;
	}
	getCode5(){
		return `
	'use strict';

	import ScaffiServer from 'scaffi-server-core';
	
	class TaskQueue extends ScaffiServer.Extends.AbstractComponent {
		setup(bull, router) {
			var queue = bull.create({queueName: 'Tasks'});
			var that = this;
			
			/* Logic to run whenever there's a job */
			queue.process( (job, done)=>{
				that.processJob(job);
			});
			
			// Queue Events
			queue.on(“active”, (job)=>{
				console.log(“Processing new job”, job.data);
			});		
			
			/* REST: GET ALL */ 
			router.list('/api/tasks', (req, res)=>{
				/* Return tasks waiting to be processed */
				bull.getDataByQueue('Tasks', 'wait', (returnData)=>{
					res.send(returnData);
				});
			});
			
			return queue;
		}
		run(bull, router){
		
		}
		processJob(job){
			/* Logic to run when there's a task job. */ 
		}
	
	}
	
	export default TaskQueue;

		`
	};
	getCode6(){
		return `
	{
		dependencies: ['task-queue']
		params: {
			public: {},
			private: {}
		}
	}
		`
	}
	getCode7(){
		return `
	'use strict';

	import ScaffiServer from 'scaffi-server-core';
	
	// Access the socket service that comes with Scaffi Server
	import UiNotifyService from ScaffiServer.Extends.UiNotifyService;
	
	class ImageTaskQueue extends ScaffiServer.Extends.AbstractComponent {
		setup(taskQueue) {
	
			// Emit a socket event if a job finishes that is an image job
			taskQueue.on(“done”, (job)=>{
				if(job.data.type == 'image'){
				UiNotifyService.emitStateChange(“image”, job.data.id, “done”);
				}
			});
			taskQueue.on(“error”, (job)=>{
				if(job.data.type == 'image'){
				UiNotifyService.emitStateChange(“image”, job.data.id, “error”);
				}
			});
			return {
				addListener: (eventType, event)=>{
					taskQueue.on(eventType, (job)=>{
						if(job.data.type == 'image'){
							UiNotifyService.emitStateChange(“image”, job.data.id, eventType);
							if(event){
								event(job);
							}
						}
					});
				}
			};
		}
		run(taskQueue){
		
		}
	
	}
	export default ImageTaskQueue;
		`;

	}
	getCode8(){
		return `
	'use strict';

	import ScaffiServer from 'scaffi-server-core';
	
	class PausedImageQueue extends ScaffiServer.Extends.AbstractComponent {
		setup(imageTaskQueue) {
			imageTaskQueue.addListener('paused', (job)=>{
				console.log(“Job is paused:”, job.data);
			});
	
			return imageTaskQueue;
		}
		run(imageTaskQueue){
		
		}
	
	}
	export default PausedImageQueue;

		`
	}
}

export default ComponentsIndex;
export {ROUTE, PARAMS};