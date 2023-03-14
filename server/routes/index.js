const Router = require('express')
const router = new Router()

const adminRouter = require('./adminRouter')
const userRouter = require('./userRouter')
const eventRouter = require('./eventRouter')
const commentRouter = require('./commentRouter')
const galleryRouter = require('./galleryRouter')

router.use('/admin', adminRouter)
router.use('/user', userRouter)
router.use('/event', eventRouter)
router.use('/comment', commentRouter)
router.use('/gallery', galleryRouter)


module.exports = router 