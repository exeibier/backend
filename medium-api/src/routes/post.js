const express = require('express')
const posts = require('../usescases/post')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/', auth, async (request, response) => {
  try {
    const getPosts = await posts.getPosts()
    response.json({
      success: true,
      message: 'all posts',
      data: {
        Posts: getPosts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const makePost = await posts.postPost(request.body)
    response.json({
      success: true,
      message: 'Post published',
      data: {
        Post: makePost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  const { id } = request.params
  try {
    const deletedPost = await posts.deletePostById(id)
    response.json({
      success: true,
      message: `post with id ${id} deleted`,
      data: {
        Post: deletedPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  const { id } = request.params
  try {
    const updatedPost = await posts.updatePostById(id, request.body)
    response.json({
      success: true,
      message: `post with id ${id} updated`,
      data: {
        post: updatedPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
