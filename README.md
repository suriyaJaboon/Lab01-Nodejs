# **Lab01-Nodejs**

## **Required Software**
* **Redis**
* **MongoDB**
* **Nginx**

## **Build Project to Production**
* ### **Download Nodejs V8.12.0 LTS**
    * tar xvf [node-v8.12.0-linux-x64.tar](https://nodejs.org/en/)
    * mv node-v8.12.0-linux-x64 node-v8.12.0
 
* ### **Install Dependencies**
    * npm install
    * npm run build

* ### **Run Script**
    * $ sh run.sh or ./run.sh

* ### **Deployment to Server**
    * scp lab01-nodejs.tar.gz ${user}@{ipaddress}:/opt
    * tar xvf lab01-nodejs.tar.gz
    * $ ln -s /opt/lab01-nodejs/setup/lab01-nodejs /etc/init.d/lab01-nodejs

* ### **Generate Key**
    * ```` 
        $ openssl genrsa -out private_key bit #default 1024 {2048 or 4096} 
        $ openssl rsa -in private_key -pubout > public_key.pub