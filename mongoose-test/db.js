const mongoose = require('mongoose')
const user = 'exeibier'
const password = 'Nirbart1'
const host = 'exeibier-npmck.mongodb.net'
const bdName = 'kodemia'

const url = `mongodb+srv://${user}:${password}@${host}/${bdName}?retryWrites=true&w=majority`

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlenght: 200,
    minlength: 2
  },
  generation: {
    type: Number,
    requiered: true,
    min: 1

  },
  gender: {
    type: String,
    enum: ['m', 'f', 'nb']
  }
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('se conecto, todo chido')
    const Koder = mongoose.model('Koders', koderSchema)
    // add QUERY
    /* koder.find({ generation: 7 })
      .then((koders) => {
        console.log('koders:', koders)
      })
      .catch(error => {
        console.log('error en la consulta', error)
      }) */

    // Create new koder
    /* const newKoder = new Koder({ name: 'nuevo koder', generation: 7, gender: 'nb' })
    newKoder.save()
      .then(() => {
        console.log('nuevo koder agregado')
      })
      .catch(error => {
        console.log('error al crear', error)
      }) */
    // create new shortcut
    Koder.create({ name: 'koder shortcut', generation: 7, gender: 'nb' })
      .then(() => {
        console.log('new koder shortcut created')
      })
      .catch(error => {
        console.log(error)
      })
  })
  .catch(error => {
    console.log((error, 'no se conecto, todo mal'))
  })
