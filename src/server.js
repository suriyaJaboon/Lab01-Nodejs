import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import routes from '@/routes/index'

const app = express()
const port = process.env.PORT || 3030
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/node', routes)
http.createServer(app).listen(port, 'localhost', () => {
  console.log(`Server start Application localhost : ${port}`)
})
