const Mentor = require('../models/mentors')

async function getAllMentors () {
  const allMentors = await Mentor.find({})
  return allMentors
}

async function createMentors (mentorData) {
  const mentorCreated = await Mentor.create(mentorData)
  return mentorCreated
}
async function deleteById (id) {
  return Mentor.findByIdAndRemove(id)
}
async function updateById (id, data) {
  return Mentor.findByIdAndUpdate(id, data)
}
module.exports = {
  getAllMentors,
  createMentors,
  deleteById,
  updateById
}
