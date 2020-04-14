const fs = require ('fs')

fs.appendFile('directory/write-2.txt', 'Adios desde node', 'utf8', (error) => {
    if(error){
        console.log('el archivo no se agrego')
        return
    }
    console.log('se agrego al archivo')
})