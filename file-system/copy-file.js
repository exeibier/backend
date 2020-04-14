const fs = require ('fs')

fs.writeFile('write-2.txt', 'todo desde node', 'utf8', (error) => {
    if(error) {
        console.log('Error al crear archivo')
        return
    }
    console.log('el archivo se creo')
})  

fs.copyFile('write.txt', 'write-2.txt', (error) => {
    if(error) {
        console.log('Hubo un error al copiar')
        return
    }
    console.log('Se copio correctamente el archivo')
    fs.readFile('write-2.txt', 'utf8', (error, data) => {
        if(error){
            console.log('error al leer el archivo')
            return
        }
        console.log('El archivo final es: ', data )
    })
})