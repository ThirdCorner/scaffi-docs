var path = require('path');
import ScaffiServer from 'scaffi-server-core';
import _ from "lodash";

module.exports = function(app, router) {
	router.list('', (req, res, next)=>{
		res.sendSuccess('Hello Dance Time');
	});
	router.list("/api/users", (req, res, next)=>{
		res.sendSuccess([{id: 1, name: "John"}]);
	})
};   