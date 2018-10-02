import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
})

export default mongoose.model('users', UserSchema)
