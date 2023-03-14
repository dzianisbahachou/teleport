const { Gallery } = require('../models/models')

class GalleryController {

    async getAll(req, res) {
        const gallery = await Gallery.findAll()

        return res.json(gallery)
    }

    async getForEvent(req, res) {

    }

    async create(req, res) {
        const { img, eventId } = req.body
        const gallery = await Gallery.create({ img, eventId })
        
        return res.json({gallery})
    }
}

module.exports = new GalleryController()