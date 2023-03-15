const { Event, Gallery, Comment } = require('../models/models')
const ApiError = require("../error/ApiError")
const uuid = require('uuid')
const path = require('path')

class EventController {

    async getAll(req, res) {
        const events = await Event.findAll()

        return res.json(events)
    }

    async getOne(req, res, next) {
        const { id } = req.params

        const event = await Event.findOne({ 
            where: { id },
            include: [{model: Gallery}, {model: Comment}]
        })

        return res.json(event)

    }

    async create(req, res, next) {
        try {
            const { title, description, price } = req.body
            const { img } = req.files
            const fileName = uuid.v4() + '.jpg'

            // moves img file to the static folder
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const event = await Event.create({title, description, price, img: fileName})
            
            return res.json(event)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new EventController()