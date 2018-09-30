#!/bin/bash
npm install
echo 'NPM INSTALL FINISH'

npm run build
echo 'NPM RUN BUILD FINISH'

mkdir ./lab01-nodejs
cp -r ./dist lab01-nodejs
cp -r ./bin lab01-nodejs
cp -r ./setup lab01-nodejs
cp -r ./node_modules lab01-nodejs
cp -r ./node-v8.12.0 lab01-nodejs
echo 'COPY FINISH'

tar cvf ./lab01-nodejs.tar.gz ./lab01-nodejs
echo 'TAR FILES FINISH'

rm -rf lab01-nodejs dist node_modules
