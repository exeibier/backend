const express = require('express')
const users = require('../usescases/user')
const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await users.login(email, password)

    response.json({
      sucess: true,
      message: 'successfully logged',
      data: {
        token
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
