const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

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

async function signup (newKoderData) {
  const { email, password } = newKoderData
  if (!email) throw new Error('Email is required')
  if (!password) throw new Error('Password is required')

  const koderAlreadyExists = await Koder.findOne({ email })
  // if inline
  if (koderAlreadyExists) throw new Error('Email already registered')
  if (password.lenght < 6) throw new Error('Password must be 6 characters minimum')

  // crear hash
  const hash = await bcrypt.hash(password, 10)

  return Koder.create({ ...newKoderData, password: hash })
}

async function login (email, password) {
  const koder = await Koder.findOne({ email })
  if (!koder) throw new Error('Invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, koder.password)
  if (!isPasswordCorrect) throw new Error('Invalid data')

  return jwt.sign({ id: koder._id })
}
module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  signup,
  login
}
