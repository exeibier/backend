//constructor de la promesa
/* Promise ((resolve, reject) => {
    if (todo ok) {
        resolve ('ok')
        return
    }  
    reject('error')
    
})*/
// si quiero crear una promesa
/* const miPrimeraPromesa = new Promise((resolve, reject) => {
    if (todo mal) {
        reject('todo mal')
        return
    }
    resolve('pk')
})
    miPrimerPromesa
    .then((resultado) => { // recibe lo que pasa en resolve
        console.log('resultado: ', resultado) // resultado: 'ok'
    })
    .catch((error) => {
        console.log('error: ', error) // error: 'todo mal'
    })
*/

/*
function miPrimerPromesa () {
    return new Promise ((resolve, reject) =>{
        if(rodo mal)
            reject('todo mal')
            return
    })
    resolve ('ok')

}

miPrimerPromesa ()
.then((resultado) => { // recibe lo que pasa en resolve
        console.log('resultado: ', resultado) // resultado: 'ok'
    })
    .catch((error) => {
        console.log('error: ', error) // error: 'todo mal'
    })

//Promificacion: proceso de wrappear una funcion que hace uso de callbacks para que ahora sea una promesa

*/
const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

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

function construirPromificacion (muroAConstruir) {
    return new Promise ((resolve, reject) => {
        construir (muroAConstruir, (error, muroConstruido) => {
            if (error){
                reject(error)
                return
            }
            resolve(muroConstruido)
        })
    })
}

function aplanarPromificada (muroAAplanar) {
    return new Promise((resolve, reject) => {
        aplanar(muroAAplanar, (error,muroAplanado) =>{
            if(error){
                reject(error)
                return
            }
            resolve(muroAplanado)

        })
    })
}

function pintarPromificada (muroAPintar) {
    return new Promise ((resolve, reject) => {
        pintar(muroAPintar, (error, muroPintado) => {
            if(error){
                reject(error)
                return
            }
            resolve(muroPintado)
        })
    })
}

/*construirPromificacion(muro)
    .then((muroConstruido) => {
        console.log('muroConstruido: ', muroConstruido)
        aplanarPromificada (muroConstruido)
        .then ((muroAplanado) => {
            console.log('muroAplanado: ', muroAplanado)
            pintarPromificada (muroAplanado)
            .then ((muroPintado) => {
                console.log('muroPintado: ', muroPintado)
            })
            .catch (error =>{
                console.error('error: ', error)
            })
        })
        .catch (error => {
            console.error('error: ', error)
        })
    })
    .catch (error => {
        console.error('error: ', error)
    })*/

    async function principal () {
        const muroConstruido = await construirPromificacion(muro)
        console.log('muroConstruido: ', muroConstruido)
        const muroAplanado = await aplanarPromificada(muroConstruido)
        console.log('muroAplanado: ', muroAplanado)
        const muroPintado = await pintarPromificada(muroAplanado)
        console.log('muroPintado: ', muroPintado)
        return muroPintado //lo que regresa la funcion al finalizar
    }

principal ()
    .then ((resultado)=>{ //aqui se guarda y llama lo que regresa la funcion al finalizarse
        console.log('Resultado: ', resultado)
        console.log('fin')
    })
    .catch (error => {
        console.error('error: ', error)
    })