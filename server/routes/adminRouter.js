const Router = require('express')
const router = new Router()
const adminController = require('../controllers/adminController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/login', adminController.login)
router.post('/create', adminController.createUser)
router.get('/auth', authMiddleware, adminController.auth)


module.exports = router 