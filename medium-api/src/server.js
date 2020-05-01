const express = require('express')

const usersRouter = require('./routes/user')
const postsRouter = require('./routes/post')
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())

// Routers

app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/auth', authRouter)

module.exports = app
