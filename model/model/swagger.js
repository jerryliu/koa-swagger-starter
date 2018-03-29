"use strict";

const config = require('config');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

mongoose.Promise = Promise

const swaggerdemo = new Schema({
	_id: String,
	created: Date,
	desc: String,
	name: String,
	type: String
}, { collection: 'swagger' });

mongoose.model(config.database.collection, swaggerdemo);
mongoose.connect(config.database.uri, {
  useMongoClient: true
});

mongoose.connection.on('open', (conn) => {
	console.log('Connected to', mongoose.connection.host + ':' + mongoose.connection.port)
});
mongoose.connection.on('close', () => {
	console.log('Disconnected from', mongoose.connection.host + ':' + mongoose.connection.port)
});
mongoose.connection.on('error', (err) => {
	console.log('MongoDB', err);
});
