const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()
const port = process.env.PORT || 3000

app.use(serveStatic(__dirname + "/public"))

app.listen(port)
console.log('server started ' + port)