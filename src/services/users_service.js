import redis from '@/databases/redis'
import { Promise } from 'mongoose';

export default {
    async getID(id) {
        await redis.set(id, 'World', 'EX', 120)
        return new Promise((res, rej) => {
            redis.get(id, function (err, result) {
                if(err) return rej(err)
                res(result)
            })
        }) 
    }
}