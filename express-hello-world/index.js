const express = require('express')
const fs = require('fs')
const app = express()



//app.[get, post, delete, put, patch](ruta, requestHandler)
app.get('/',(request, response) =>{
    response.write('Hello Koders')
    
    response.end()
}) 
    //endpoint es la combinacion de una ruta y un metodo
app.get('/hola',(request,response) => {
    response.json({
        message: 'hola en json'
    })
})

//'application/json'

/*app.get('/adios',(request, response) => {
    response.writeHead(200,{
        'Content-Type': 'application/json'
    })
    const responseObject = {
        message: 'adios'
    }
    response.write(JSON.stringify(responseObject))
    response.end()
})*/

app.post('/',(request, response) =>{
    response.json({
        message:'POST to root'
    })
})

app.delete('/',(request,response) =>{
    response.status(400)
    response.json({
        message:'DELETE a root'
    })
})

app.get('/directorio',(request, response) =>{
    fs.readFile('hola.txt','utf-8',(error, data) =>{
        if (error){
            response.write(error)
            return
        }
        response.json({
            message: data
        })
    })
})
        
app.listen(8080, () => {
    console.log('server running')
})