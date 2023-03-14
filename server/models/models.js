const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Admin = sequelize.define('admin', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING }
})

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    instagram: { type: DataTypes.STRING , defaultValue: 'no' }
})

const Event = sequelize.define('event', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
})

const Comment = sequelize.define('comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userName: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false }
})

const Gallery = sequelize.define('gallery', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: { type: DataTypes.STRING, allowNull: false },
})

Event.hasMany(Comment)
Comment.belongsTo(Event)

Event.hasMany(Gallery)
Gallery.belongsTo(Event)

module.exports = {
    Admin,
    User,
    Event,
    Comment,
    Gallery
}