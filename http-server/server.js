const http = require('http')

const server = http.createServer((request, response) =>{
    response.writeHead(200, {
        'Content-type': 'text/html'
    })
    console.log('METHOD', request.method)
    console.log('URL', request.url)
    if ( request.url === '/hola'){
        response.write('<h1>hola mundo desde node http</h1>')
    }
    if (request.url === '/adios'){
        response.write('Adios desde node')
    }

    response.end()
})

server.listen(8080)