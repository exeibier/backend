const Koder = require('../models/koders')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema

async function getAll () {
  const allKoders = await Koder.find({})
  return allKoders
}

async function create (koderData) {
  const koderCreated = await Koder.create(koderData)
  return koderCreated
}

function deleteById (id) {
  return Koder.findByIdAndRemove(id)
}

function updateById (id, data) {
  return Koder.findByIdAndUpdate(id, data)
}
module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
