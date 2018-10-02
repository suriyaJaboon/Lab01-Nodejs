import redis from '@/databases/redis'
import jwt_service from '@/services/jwt_service'
import environment from '@/environment'
import uuidv4 from 'uuid/v4'

export default {
    login(payload) {
        let expiresToken = environment.expiresMode()
        if(payload.username === 'tom' && payload.password === '12345') {
            const uuid = uuidv4()
            const uuid_user = {id: 1, uuid: uuid}
            let token = jwt_service.generateToken(uuid_user, {
                issuser: 'techcatch', 
                subject: 'techcatch@techcatch.com', 
                audience: 'http://techcatch.com', 
                expiresIn: expiresToken.key
            })
        redis.set(uuid, token, 'EX', expiresToken.value)
        return token
        } else {
            return ''
        }
    }
}