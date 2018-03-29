const Koa = require('koa');
const path = require('path');
const logger = require('koa-logger');
const convert = require('koa-convert');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const routes = require('./routes');
const config = require('config');

const app = new Koa();

app.use(convert(logger()))
   .use(convert(bodyParser()))
   .use(convert(koaStatic(path.join(__dirname, 'public'), { hidden: true })))
   .use(cors({
	   origin: function (ctx) {
				ctx.set("Access-Control-Allow-Origin", "*");
		   }
	 }))
   .use(routes.routes())
   .use(routes.allowedMethods())

app.listen(config.server.port, () => {
	console.log('Listening on port ' + config.server.port + '.')
});
