const express = require('express')
const koders = require('../usescases/koders')

const router = express.Router()
router.get('/', async (request, response) => {
  const allKoders = await koders.getAll()
  response.json({
    message: 'All koders',
    data: {
      koders: allKoders
    }
  })
})

router.post('/', async (request, response) => {
  const newKoder = request.body
  const koderCreated = await koders.create(newKoder)

  response.json({
    message: 'new Koder added',
    data: {
      koder: koderCreated
    }
  })
})

module.exports = router
