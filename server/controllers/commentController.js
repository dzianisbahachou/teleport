const { Comment } = require('../models/models')


class CommentController {

    async getAll(req, res) {
        const comments = await Comment.findAll()
        return res.json(comments)
    }

    async getForEvent(req, res) {
        
    }

    async create(req, res) {
        const { userName, text, eventId } = req.body
        const comment = await Comment.create({ userName, text, eventId })
        return res.json(comment)
    }
}

module.exports = new CommentController()