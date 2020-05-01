const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

const User = require('../models/user')

function getUsers () {
  return User.find()
}

async function signup (newUserData) {
  const { email, password } = newUserData
  if (!email) throw new Error('Email required')
  if (!password) throw new Error('Password is requiered')

  const userAlreadyExist = await User.findOne()
  if (userAlreadyExist) throw new Error('Email already registered')
  if (password.lenght < 5) throw new Error('Password too short')

  const hash = await bcrypt.hash(password, 10)

  return User.create({ ...newUserData, password: hash })
}

async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Not valid data')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('Not valid data')

  return jwt.sign({ id: user._id })
}

module.exports = {
  getUsers,
  signup,
  login
}
