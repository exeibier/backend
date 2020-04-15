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

contactar(inscribirseKod,(errorDeContacto, makeContact) => {
    if (errorDeContacto) {
        console.error('Error de contacto')
        return
    }
    entrevista (makeContact, (errorDeEntrevista, makeInterview) => {
        if (errorDeEntrevista){
            console.error('error de entrevista')
            return
        }
        inscripcion (makeInterview, (errorDeInscripcion, makeInscripction) => {
            if (errorDeInscripcion){
                console.error('error de inscripcion')
                return
            }
            console.log('Felicidades te inscribiste a Kodemia n.n', makeInscripction)
        })

    })
})
