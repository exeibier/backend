    const fs = require('fs')

fs.rmdir('directory', (error) => {
    if(error){
        console.log('no se borro el directorio')
    }
    console.log('Se borro el directorio')
    
    fs.readdir('directory', (error) => {
        if(error) {
            console.log('error al leer directorio')
            return
        }
        console.log('se leyo el directorio correctamente')
    })  

    fs.unlink('directory/write.txt', (error) =>{
        if(error) {
            console.log('no se borro el archivo')
        }
    })
    console.log('se borro el archivo')

    fs.unlink('directory/write-2.txt', (error) =>{
        if(error) {
            console.log('no se borro el archivo')
        }
    })
    console.log('se borro el archivo')
   

})
