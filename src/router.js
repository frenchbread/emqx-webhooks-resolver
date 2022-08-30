const KoaRouter = require('koa-router')

const router = new KoaRouter()

router.get('/', ctx => {
    ctx.body = {
        ok: true
    }
})

router.post('/onmessage', ctx => {
    const { payload } = ctx.request.body

    console.log(payload)

    ctx.body = {
        ok: true
    }
})

module.exports = router