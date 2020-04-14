const fs = require ('fs')

fs.writeFile('directory/write.txt','Hola desde node','utf8', (error) => {
    if(error) {
        console.log('Hubo un error al escribir el archivo')
        return 
    }
    console.log('Termine de escribir el archivo')
})

