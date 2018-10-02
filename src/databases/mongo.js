import mongoose from 'mongoose'
import environment from '@/environment'

let mongo = environment.getMode().mongo
let env = `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`
mongoose.connect(env, { useNewUrlParser: true })
mongoose.connection.on('connected', () => {
    console.log(`Conneted to database ${env}`);
})
mongoose.connection.on('error', (err) => {
    console.log(`Database error: ${err}`)
})
export default mongoose