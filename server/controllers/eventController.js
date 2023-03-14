const { Event } = require('../models/models')
const ApiError = require("../error/ApiError")

class EventController {

    async getAll(req, res) {
        const events = await Event.findAll()

        return res.json(events)
    }

    async getOne(req, res, next) {
        const { id } = req.params

        if (id === '5') {
            return next(ApiError.badRequest('HER'))
        }

    }

    async create(req, res) {
        const { title, description, price, img } = req.body
        const event = await Event.create({ title, description, price, img })
        
        return res.json(event)
    }
}

module.exports = new EventController()