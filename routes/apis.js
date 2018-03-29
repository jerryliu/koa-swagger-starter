"use strict";

const Router = require('koa-router');
const SwaggerDB = require('../model/swaggerdb');
const router = module.exports = new Router();

const Swagger = new SwaggerDB();

router.get('/', function (ctx, next) {
  ctx.body = 'This a default response!';
});

router.get('/hello/:name', async function(ctx, next) {
	//var data = await Swagger.getTestData(ctx.params);
	ctx.body = 'hello ' + ctx.params.name;
});
