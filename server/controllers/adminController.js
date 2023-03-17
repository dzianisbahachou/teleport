const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Admin } = require('../models/models')

function generateJwn(id, login) {
    return jwt.sign(
        {id, login}, 
        process.env.SECRET_KEY, 
        {expiresIn: '24h'}
    )
}

class AdminController {

    async createUser(req, res, next) {
        const { login, password } = req.body

        if ( !login || !password) {
            return next(ApiError.validation('Логин и пароль не должны быть пустыми'))
        }

        const existingAdmin = await Admin.findOne({where: {login}})

        if (existingAdmin) {
            return next(ApiError.validation('Админ с таким логином уще существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const admin = await Admin.create({login, password: hashPassword})
        const token = generateJwn(admin.id)
        return res.json({token})
    }

    async login(req, res, next) {
        const { login, password } = req.body
        const existingAdmin = await Admin.findOne({where: {login}})
        if (!existingAdmin) {
            return next(ApiError.validation('Админ с таким логином не существует'))
        }

        const comparedPassword = bcrypt.compareSync(password, existingAdmin.password)
        
        if (!comparedPassword) {
            return next(ApiError.validation('Неверный пароль'))
        }

        const token = generateJwn(existingAdmin.id, existingAdmin.login)
        return res.json({token})
    }

    async auth(req, res) {
        const token = generateJwn(req.user.id, req.user.login)
        res.json({token})
    }
}

module.exports = new AdminController()