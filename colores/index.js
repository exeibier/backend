const colors = require('colors/safe')

const moment = require('moment')

const name = 'xabier'

const now = moment().format('h:mm:ss a')

// script que imprima mi nombre = hola[nombre] son las [hola]

console.log(colors.rainbow(`Hola ${name} son las ${now}`))
