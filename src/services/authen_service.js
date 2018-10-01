import jwt_service from '@/services/jwt_service'
import environment from '@/environment'
import uuidv4 from 'uuid/v4'

export default {
    login(payload) {
        if(payload.username === 'tom' && payload.password === '12345') {
            const uuid_user = {id: 1, uuid: uuidv4()}
            return jwt_service.generateToken(uuid_user, {
                    issuser: 'techcatch', 
                    subject: 'techcatch@techcatch.com', 
                    audience: 'http://techcatch.com', 
                    expiresIn: environment.setMode().config.expiresToken
                })
        } else {
            return ''
        }
    }
}