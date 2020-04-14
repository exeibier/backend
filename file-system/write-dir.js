const fs = require ('fs')

fs.mkdir('directory', (error) => {
    if(error){
        console.log('error al crear carpeta')
        return
    }
    console.log('se creo la carpeta')
})