const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventController')

router.get('/', eventController.getAll)
router.get('/:id', eventController.getOne)
router.post('/', eventController.create)

module.exports = router 