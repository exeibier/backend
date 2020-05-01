const express = require('express')
const koders = require('../usescases/koders')
const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await koders.login(email, password)

    response.json({
      success: true,
      message: 'logged in',
      data: {
        token
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
