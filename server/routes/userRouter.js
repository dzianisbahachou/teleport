const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.get('/', authMiddleware, userController.getAll)
router.post('/', userController.create)


module.exports = router 