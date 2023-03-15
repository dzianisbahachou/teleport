const ApiError = require('../error/ApiError');
const { Gallery } = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class GalleryController {

    async getAll(req, res) {
        const { eventId } = req.query
        let gallery;

        if (eventId) {
            gallery = await Gallery.findAll({where: {eventId}}) 
        } else {
            gallery = await Gallery.findAll()
        }

        return res.json(gallery)
    }

    async create(req, res, next) {
        try {
            const { eventId } = req.body
            const { img } = req.files
            const fileName = uuid.v4() + '.jpg'

            // moves img file to the static folder
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const gallery = await Gallery.create({eventId, img: fileName})
            
            return res.json({gallery})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
        
    }
}

module.exports = new GalleryController()