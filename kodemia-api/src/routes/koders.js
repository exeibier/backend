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
  try {
    const koderCreated = await koders.create(request.body)

    response.json({
      success: true,
      message: 'new Koder added',
      data: {
        koder: koderCreated
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

// DELETE /koders/:id
// PATCH / koders/:id

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteById(id)
    response.json({
      success: true,
      message: `koder with ${id} deleted`,
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderUpdate = await koders.updateById(id, request.body)
    response.json({
      success: true,
      message: `koder wit id ${id} updated`,
      data: {
        koder: koderUpdate
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
