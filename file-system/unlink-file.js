const fs = require ('fs')

fs.writeFile('write-2.txt', 'Adius desde node', 'utf8', (error) => {
    if(error) {
        console.log('Error al crear archivo')
        return
    }
    console.log('el archivo se creo')
})  

fs.unlink('write-2.txt', (error) => {
    if(error){
        console.log('Error al eliminar archivo')
        return
    }
    console.log('archivo eliminado correctamente')
})   