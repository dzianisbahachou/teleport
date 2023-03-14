const Router = require('express')
const router = new Router()
const galleryController = require('../controllers/galleryController')

router.get('/', galleryController.getAll)
router.get('/:eventId', galleryController.getForEvent)
router.post('/', galleryController.create)


module.exports = router 