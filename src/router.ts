import { Context } from 'koa'
import KoaRouter from 'koa-router'

const router = new KoaRouter()

router.get('/', (ctx: Context) => {
  ctx.body = {
    ok: true
  }
})

router.post('/onmessage', (ctx: Context) => {
  const { payload } = ctx.request.body

  console.log(payload)

  ctx.body = {
    ok: true
  }
})

export default router