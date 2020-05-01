const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 15
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  estimateReadTime: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }

})

module.exports = mongoose.model('Post', postSchema)
