'use strict';
/**
 * web hook service
 */

const Koa = require('koa');
const app = module.exports = new Koa();
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const router = new Router();
const mainCtl = require('./lib/main-router');

global.dirname = __dirname;

app.listen(5288);
app.on('error', (err, cxt) => {
    console.log('Caught exception: ', err, cxt);
});

router.post('/', mainCtl.handlerPost);

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());
