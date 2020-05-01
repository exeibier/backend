const Post = require('../models/post')

function getPosts () {
  return Post.find()
}

function postPost (postData) {
  return Post.create(postData)
}

function deletePostById (id) {
  return Post.findByIdAndRemove(id)
}

function updatePostById (id, data) {
  return Post.findByIdAndUpdate(id, data)
}
module.exports = {
  getPosts,
  postPost,
  deletePostById,
  updatePostById
}
