import Koa from 'koa'
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import cors from 'koa-cors'

import router from './router'

const app = new Koa()

app.use(json())
app.use(bodyparser())
app.use(cors())

app.use(router.routes())

export default app