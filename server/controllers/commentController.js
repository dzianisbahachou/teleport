const ApiError = require('../error/ApiError');
const { Comment } = require('../models/models')

class CommentController {

    async getAll(req, res) {
        const { eventId } = req.query
        let comments;

        if (eventId) {
            comments = await Comment.findAll({where: {eventId}}) 
        } else {
            comments = await Comment.findAll()
        }

        return res.json(comments)
    }

    async create(req, res, next) {
        try {
            const { userName, text, eventId } = req.body
            const comment = await Comment.create({ userName, text, eventId })
            return res.json(comment)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CommentController()