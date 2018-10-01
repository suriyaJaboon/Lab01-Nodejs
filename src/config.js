export default {
    development : {
        expiresToken: "1h",
        private_Key: "/opt/keys/keys2048/private_key",
        public_Key: "/opt/keys/keys2048/public_key.pub"
    },
    production: {
        expiresToken: "2h",
        private_Key: "/opt/keys/keys4096/private_key",
        public_Key: "/opt/keys/keys4096/public_key.pub"
    },
}