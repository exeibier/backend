const mongoose = require('mongoose')

const user = 'exeibier'
const password = 'Nirbart1'
const host = 'exeibier-npmck.mongodb.net'
const bdName = 'blog'

const url = `mongodb+srv://${user}:${password}@${host}/${bdName}`

function connect () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
  connect
}
