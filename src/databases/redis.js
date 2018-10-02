import redis from 'redis'
import environment from '@/environment'

let env = environment.getMode().redis
let client = redis.createClient({host: env.host, port: env.port, database: env.database})
client.on('connect', () => {
    console.log(`Redis clinet connected ${env.host}:${env.port}, database: ${env.database}`)
})
client.on('error', (e) => {
    console.log(`Redis clinet connected error ${e}`)
})
client.monitor((e, v) => {
    console.log('Entering monitoring mode. error: %s, monitor: %s',e , v)
})
client.on("monitor", (time, args) => {
    console.log(`${time} : ${args}`)
})
export default client