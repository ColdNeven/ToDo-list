const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        defaul: false
    }
})

module.exports = model('Todo', schema)