import fs from 'fs'
import config from '@/config'

export default {
    setMode() {
        let mode = process.env.NODE_MODE || 'development'
        let publicKey, privateKey, conf
        if(mode === 'production') {
            publicKey = fs.readFileSync(config.production.public_Key, 'utf8')
            privateKey = fs.readFileSync(config.production.private_Key, 'utf8')
            conf = config.production  
        } else {
            publicKey = fs.readFileSync(config.development.public_Key, 'utf8')
            privateKey = fs.readFileSync(config.development.private_Key, 'utf8')
            conf = config.development
        }
        return {public_Key: publicKey, private_Key: privateKey, config: conf}
    }
}