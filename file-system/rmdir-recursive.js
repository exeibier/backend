const fs = require('fs')
// 1.- existe el path?
// 2.- es un archivo o carpeta??

function rmdir (pathToDelete) {
    fs.access(pathToDelete, error => {
        if (error) {
            console.log(error)
            return
        }
        //Se si existe el archivo
         fs.stat(pathToDelete,(error, stats) => {
            if(error){
                console.error('no se pudo leer el archivo:', pathToDelete)
                return
            }
            if (stats.isDirectory()){
                fs.readdir(pathToDelete, (error, files) => {
                    if (error) {
                        console.error('No se puede leer la carpeta: ', error)
                        return
                    }
                    files.forEach((file, index) =>{
                        const pathFile = `${pathToDelete}/${file}`
                        fs.stat(pathFile, (error, fileStats) => {
                            if (fileStats.isDirectory()) {
                                //recursividad 
                            } else {
                                fs.unlink(pathFile, (error) => {
                                    console.log('El archivo ', pathFile, ' fue borrado')
                                    if ((files.length -1) === index) {
                                        fs.rmdir(pathToDelete, (error) => {
                                            if (error){
                                                console.error('El path no se pudo borrar')
                                                return
                                            }
                                            console.log('carpeta borrada')
                                        })
                                    }
                                    return
                                })
                            }
                        })
                    })
                    if (files.length === 0) {
                        fs.rmdir(pathToDelete, (error) => {
                            if (error){
                                console.error('El path no se pudo borrar')
                                return
                            }
                            console.log('carpeta borrada')
                        })
                    }
                })
                return
            }
            console.error('El path esta apuntando a un archivo no a una carpeta')
        })
    })
    //no se si existe el archivo
}

rmdir('directory')