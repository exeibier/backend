const server = require('./src/server')
const db = require('./src/lib/db')

async function main () {
  await db.connect()
  console.log('db connected')
  server.listen(8081, () => {
    console.log('server running')
  })
}

main()
  .then(() => {
    console.log('server ready')
  })
  .catch(error => {
    console.error('server not ready:', error)
  })
