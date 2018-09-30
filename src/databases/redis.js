import redis from 'redis'
let client = redis.createClient()

client.on('connect', () => {
    console.log('Redis clinet connected')
})

client.on('error', (e) => {
    console.log(`Redis clinet connected error ${e}`)
})
client.monitor((e, v) => {
    console.log('Entering monitoring mode. error :%s, monitor: %s',e , v)
})

client.on("monitor", (time, args) => {
    console.log(time + ": " + args)
})
export default client