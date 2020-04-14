const fs = require('fs')

fs.rmdir('directory', (error) =>  {
    if(error){
        console.log('error al borrar carpeta')
        return
    }
    console.log('la carpeta se ha borrado')
})