const Router = require('express')
const router = new Router()
const adminController = require('../controllers/adminController')

router.post('/login', adminController.login)
router.get('/auth', adminController.auth)


module.exports = router 