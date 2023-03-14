const ApiError = require('../error/ApiError')
const { User } = require('../models/models')

class UserController {

    async getAll(req, res) {
        const users = await User.findAll()

        return res.json(users)
    }

    async create(req, res) {
        const { number, name, instagram } = req.body
        const user = await User.create({ number, name, instagram })
        
        return res.json({user})
    }
}

module.exports = new UserController()