import bcrypt from 'bcryptjs'
import redis from '@/databases/redis'
import Users from '@/models/users_model'

export default {
    getById(id) {
        redis.set(id, 'World', 'EX', 120)
        return new Promise((res, rej) => {
            redis.get(id, function (err, result) {
                if(err) return rej(err)
                res(result)
            })
        }) 
    },
    
    async create(user) {
        try {
            let gen_salt = await bcrypt.genSalt(10)
            let bcrypt_hash = await bcrypt.hash(user.password, gen_salt)
            user.password = bcrypt_hash
            let create_user = await Users.create(user)
            await delete create_user.password
            return create_user
        } catch(e) {
            throw e
        }
    }
}