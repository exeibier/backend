const fs = require('fs')

path = 'directory'
pathToWrite = 'directory/write1.txt'
data = 'Hola desde mi casa'

function mkDirPromificado (path) {
    return new Promise ((resolve,reject) =>{
        fs.mkdir(path, (error) => {
            if(error){
                reject(error)
                return
            }
            resolve(path)
        })
    })
}

function touchFilePromificado (pathToWrite, data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(pathToWrite, data, 'utf8', (error) => {
            if(error){
                reject(error)
                return
            }
            resolve(`the message: ${data} was succefully writen on ${pathToWrite}`)
        })
    })
}

function appendFilePromificada (pathToWrite, data) {
    return new Promise ((resolve, reject) => {
        fs.appendFile(pathToWrite, data, 'utf8', (error) => {
            if(error){
                reject(error)
                return
            }
            resolve(`the message: ${data} was appended succesfully in the pat ${pathToWrite}`)
        })
    })
}

function redDirPromificado (directoryPath) {
    return new Promise ((resolve, reject) => {
        fs.readdir(directoryPath,(error) =>{
            if (error){
                reject(error)
                return
            }
            resolve(`the directory ${directoryPath} was read`)
        })
    })
}

function readFilePromificado (file) {
    return new Promise ((resolve, reject) => {
        fs.readFile(file, (error) =>{
            if (error){
                reject(error)
            }
            resolve(`the file says ${file}`)
        })
    })
}

function copyFilePromificado (src, dest) {
    return new Promise ((resolve, reject) => {
        fs.copyFile(src, dest, (error) => {
            if(error){
                reject(error)
            }
            resolve(`the file ${src} was copy to ${dest}`)
        })
    })
}

function openDirPromificada (path) {
    return new Promise ((resolve, reject) => {
        fs.opendir(path,(error) => {
            if (error){
                reject(error)
            }
            resolve
        })
    })
}



async function principal () {
    const makeDir = await mkDirPromificado(path)
    console.log('el directorio se creo:', makeDir)
    const makeFile = await touchFilePromificado(pathToWrite,data, makeDir)
    console.log('se creo el archivo:', makeFile)
    return makeFile
}

principal ()
.then (result =>{
    console.log('Se creo el directorio y el archivo', result)
})
.catch (error =>{
    console.error('error: ', error)
})