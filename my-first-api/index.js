const express = require('express')
const fs = require("fs")

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))

const server = express()
server.use(express.json()) //middleware

server.get('/', (request, response) => {
    response.json({
        message:'My first API is running'
    })
})

server.get('/koders',(req, resp) => {
    resp.json ({
        message:"All the koders",
        data: {
            koders: kodemia.koders
        }
    })
})

server.post('/koders',(request,response) => {
    const newKoder = {
        name: request.body.name,
        generation: request.body.generation
    }

    kodemia.koders.push(newKoder)
    response.json({
        message:'new koder added',
        data:{
            koder: newKoder
        }
    })
})

server.get('/mentores',(request,response) =>{
    response.json ({
        message:'All the mentors',
        data: {
            mentors: kodemia.mentors
        }
    })
})

server.post("/mentores",(request, response) =>{
    const newMentor = {
        name: request.body.name,
        generation: request.body.generation
    }

    kodemia.mentors.push(newMentor)
    response.json({
        message:"added a new mentor",
        data: {
            mentors:newMentor
        }
    })
})
server.listen(8080, () =>{
    console.log('server is running')
})