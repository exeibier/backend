const http = require('http')

const server = http.createServer((request, response) => {
    response.write('Hola desde la contingencia')
    response.end()
})

server.listen(8080)