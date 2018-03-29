"use strict";

require('./model/swagger');
const config = require('config');
const rp = require('request-promise');
const mongoose = require('mongoose');
const swagger = mongoose.model('swagger');

const SwaggerDB = module.exports = function() {
};

SwaggerDB.prototype.getData = async function() {
	let results = await swagger.find({}).skip(0).limit(2).exec();
	return results ;
};
