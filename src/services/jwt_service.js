import jwt from 'jsonwebtoken'
import environment from '@/environment'

export default {
    generateToken(payload, sign) {
        var signOptions = {
            issuer: sign.issuser,
            subject: sign.subject,
            audience: sign.audience,
            expiresIn: sign.expiresIn,
            algorithm: 'RS512'
        }
        return jwt.sign(payload, environment.getMode().private_Key, signOptions)
    },
    
    verifyToken(token) {
        return jwt.verify(token, environment.getMode().public_Key, (err, result) => {
            if(err) {
                return err
            } else {
                return result
            } 
        })
    },

    isVerifyToken(token) {
        return jwt.verify(token, environment.getMode().public_key, (err, result) => {
            if(err) {
                return false
            } else {
                return true
            } 
        })
    },

    decodeToken(token) {
        return jwt.decode(token, {complete: true})
    }

}