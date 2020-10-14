const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TodoSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Todo = mongoose.model('todo', TodoSchema)