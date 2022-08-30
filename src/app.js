const Koa = require('koa')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const cors = require('koa-cors')

const router = require('./router')

const app = new Koa()

app.use(json())
app.use(bodyparser())
app.use(cors())

app.use(router.routes())

module.exports = app