const express = require('express')
const mentors = require('../usescases/mentors')

const router = express.Router()
router.get('/', async (request, response) => {
  const allMentors = await mentors.getAllMentors()
  response.json({
    message: 'All Mentors',
    data: {
      mentors: allMentors
    }
  })
})

router.post('/', async (request, response) => {
  try {
    const newMentor = request.body
    const mentorCreated = await mentors.createMentors(newMentor)
    response.json({
      success: true,
      message: 'New mentor added',
      data: {
        mentor: mentorCreated
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
  try {
    const { id } = request.params
    const mentorDeleted = await mentors.deleteById(id)
    response.json({
      message: `Mentor with the id ${id} was deleted`,
      data: {
        mentor: mentorDeleted
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
  try {
    const { id } = request.params
    const mentorUpdated = await mentors.updateById(id)
    response.json({
      success: true,
      message: `Mentor with id ${id} updated`,
      data: {
        mentor: mentorUpdated
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
