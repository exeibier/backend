inscribirseKod = {
    contactado: false,
    entrevistado: false,
    inscrito: false
}

function contactar (getContacto, callback) {
    setTimeout (() => {
        getContacto.contactado = true 
        error = getContacto.contactado ?
        null
        : 'No se pudo contactar con nadie'
        callback(error, getContacto)
    },2000)
}

function entrevista (getEntrevista, callback) {
    setTimeout(() => {
        getEntrevista.entrevistado = true
        error = getEntrevista.entrevistado ?
        null
        :'No se concreto la entrevista'
        callback(error, getEntrevista)
    }, 2000);
}

function inscripcion (getInscripcion, callback) {
    setTimeout(() => {
        getInscripcion.inscrito = true
        error = getInscripcion.inscrito ?
        null
        : 'no se realizo la inscripción'
        callback(error, getInscripcion)
    }, 2000);
}

function contactarPromificado (getContacto){
    return new Promise ((resolve, reject) =>{
        contactar (getContacto, (error, makeContact) =>{
            if (error){
                reject(error)
                return
            }
            resolve(makeContact)
        })
    })
}

function entrevistaPromificado (getEntrevista){
    return new Promise ((resolve, reject) =>{
        entrevista (getEntrevista, (error, makeInterview) => {
            if (error){
                reject(error)
                return
            }
            resolve(makeInterview)

        })
    })
}

function inscripcionPromificado (getInscripcion){
    return new Promise ((resolve, reject) => {
        inscripcion (getInscripcion, (error, makeInscription )=> {
            if (error){
                reject(error)
                return
            }
            resolve(makeInscription)
        })
    })
}

/*contactarPromificado(inscribirseKod)
    .then((makeContact) =>{
        console.log('makeContact: ', makeContact)
        entrevistaPromificado(makeContact)
            .then((makeInterview) =>{ 
                console.log('makeInterview', makeInterview)
                    inscripcionPromificado (makeInterview)
                    .then ((makeInscription)=>{
                        console.log('makeInscription: ', makeInscription)
                    })
                    .catch (error => {
                        console.error('error: ', error)
                    })
            })
        .catch(error =>{
            console.error('error: ', error)
        })
    })
    .catch(error => {
        console.error('error:', error)
    })*/

    /* 
        async/awaut
        donde use await, la funcion que lo contiene debe ser marcada como asincrona
        las funciones marcadas con await, regresan una promesa
        await construirPromificada(muro) -> asi no sirve
        siempre debe estar contenida por una funcion
    
    */

    async function principal () {
        const makeContact = await contactarPromificado (inscribirseKod)
        console.log('makeContact: ', makeContact)
        const makeInterview = await entrevistaPromificado(makeContact)
        console.log('makeInterview: ', makeInterview)
        const makeInscription = await inscripcionPromificado(makeInterview)
        console.log('makeInscription: ', makeInscription)
        return makeInscription 
    }

    principal ()
    .then (result =>{
        console.log('Felicidades estas inscrito en kodemia', result)
    })
    .catch (error =>{
        console.error('error: ', error)
    })
