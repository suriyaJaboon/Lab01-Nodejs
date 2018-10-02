import fs from 'fs'
import path from 'path'

export default {
    getMode() {
        const conf = path.join(__dirname, '../keys')
        let config = this.configMode()
        let publicKey = fs.readFileSync(`${conf}/${config.public_Key}`, 'utf8')
        let privateKey = fs.readFileSync(`${conf}/${config.private_Key}`, 'utf8')
        return {public_Key: publicKey, private_Key: privateKey, redis: config.redis, mongo: config.mongo, expiresToken: config.expiresToken}
    },

    expiresMode() {
        let expiresToken = this.getMode().expiresToken
        let value
        for (var indexs in expiresToken) {
            if(expiresToken[indexs].is) {
                value = expiresToken[indexs]
            }
        }
        // value = expiresToken.filter(ise => ise.is === true)
        return (value) ? value : { "is": false, "key": "1h", "value": 3600000 } 
    },
    configMode() {
        let mode = process.env.NODE_MODE || 'development'
        const conf = path.join(__dirname, '../config')
        if(mode === 'production') {
            return JSON.parse(fs.readFileSync(`${conf}/production.json`, 'utf8'))
        } else {
            return JSON.parse(fs.readFileSync(`${conf}/develop.json`, 'utf8'))
        }
    }
}