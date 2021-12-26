var express = require('express')
var app = express()

console.log("OK")
app.listen(3000)
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Selamat Datang !')
})

app.get('/name', function (req, res) {
res.send('Yuki Fachriansyah')
})

app.get('/name/first', function (req, res) {
res.send('Yuki')
})

app.get('/name/last', function (req, res) {
res.send('Fachriansyah')
})