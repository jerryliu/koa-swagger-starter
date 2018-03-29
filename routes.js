"use strict";

const KoaRouter = require('koa-router');
const index = require('./routes/index');
const apis = require('./routes/apis');
const router = module.exports = new KoaRouter();

router.use('/apis', apis.routes(), apis.allowedMethods());
router.use('/', index.routes(), index.allowedMethods());
