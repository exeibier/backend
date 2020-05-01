const express = require('express')
const users = require('../usescases/user')

// const auth = require('../middlewares/auth')
const router = express.Router()

router.post('/signup', async (request, response) => {
  try {
    const newUser = await users.signup(request.body)
    response.json({
      success: true,
      message: 'New User',
      data: {
        User: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      error: error.message
    })
  }
})

router.get('/', async (request, response) => {
  try {
    const allUsers = await users.getUsers()
    response.json({
      success: true,
      message: 'all Users',
      data: {
        Users: allUsers
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
