const fs = require('fs')

fs.readdir('directory', (error) => {
    if(error) {
        console.log('error al leer directorio')
        return
    }
    console.log('se leyo el directorio correctamente')
})