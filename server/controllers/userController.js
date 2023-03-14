const ApiError = require('../error/ApiError')
const { User } = require('../models/models')

class UserController {

    async getAll(req, res) {
        const users = await User.findAll()

        return res.json(users)
    }

    async create(req, res, next) {
        try {
            const { number, name, instagram } = req.body
            const user = await User.create({ number, name, instagram })
            
            return res.json({user})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()