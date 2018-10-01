import redis from '@/databases/redis'

export default {
    async getID(id) {
        await redis.set('id', id)
        await redis.set("hello", "world");
        return await redis.get('id', function (err, result) {
            if(err) throw err
            // redis.quit();
            return result.toString()
        })
    }
}