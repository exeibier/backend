const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

//funciones que ejecutan callbacks
// declaracion de una funcion = function (argumentos){
// ...comportamiento
//}
//Implementación de la funcion
//Construir()
function construir (muroAConstruir, callback) {
    setTimeout(() =>{
        let error = null
        muroAConstruir.estaConstruido = true
        if (muroAConstruir.estaConstruido === false) {
            error = 'No se pudo construir el muro'
        }
        callback(error, muroAConstruir)
    },3000)
}

function aplanar (muroAAplanar, callback) {
    setTimeout(() =>{
        muroAAplanar.estaAplanado = true
        error = muroAAplanar.estaAplanado ? 
         null 
         : 'no se pudo aplanar' // es true: // es false
        callback(error, muroAAplanar)
    },3000)
}

function pintar (muroAPintar, callback) {
    setTimeout(() =>{
        muroAPintar.estaPintado = true
        error = muroAPintar.estaPintado ?
        null
        :'no se pudo pintar'
        callback(error, muroAPintar)

    }, 3000)
}
construir(muro,(errorDeConstruccion,muroConstruido) => {
    if (errorDeConstruccion){
        console.error('error de construccion')
        return
    }
    aplanar(muroConstruido, (errorDeAplanado, muroAplanado) => {
        if (errorDeAplanado){
            console.error('error de aplanado')
            return
        }
        pintar (muroAplanado, (errorDePintado, muroPintado) => {
            if (errorDePintado){
                console.error('error de pintado')
                return
            }
            console.log('muroPintado: ', muroPintado)
        })
    })
    
})
