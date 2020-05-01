const express = require('express')
// const koders = require('./usescases/koders')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')

const app = express() // creando la linea de producción (el servidor)

// todos los recursos se escriben en plural
/*
app.get('/koders', async (request, response) => {
  const allKoders = await koders.getAll()
  response.json({
    message: ' All koders',
    data: {
      koders: allKoders
    }
  })
}) */
// nos sirve para montar nuestro router
// Middleware
// Parsea cada request a json, solo en caso de que contenga
// el header'content-type' con valor application/json
// toma el body y lo transforma en un json que nos lo entrega en el objeto request.body
// reciben request, response, next

app.use(express.json())
// montamos router en koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)

module.exports = app
