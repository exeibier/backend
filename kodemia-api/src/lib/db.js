const mongoose = require('mongoose')
const user = 'exeibier'
const password = 'Nirbart1'
const host = 'exeibier-npmck.mongodb.net'
const bdName = 'kodemia'

const url = `mongodb+srv://${user}:${password}@${host}/${bdName}`

function connect () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
  connect
}
// del otro lado..
// const db = requier ('..db.js')
// db() -> asi se exporta directo la funcion
// db.connect()
