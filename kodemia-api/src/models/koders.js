const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlenght: 2,
    maxlenght: 120,
    required: true
  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    requiered: true
  }
})

// module.exports -> para decir lo que queremos que el script exporte
// SOlo se puede exportar una sola cosa

module.exports = mongoose.model('Koders', koderSchema)
