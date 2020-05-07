const app = require('express')()
const morgan = require('morgan')
const fs = require('fs')
const port = process.env.PORT || 8080

let accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))
app.get('/', function (req, res) {
  res.send("Hello World!")
})
app.listen(port, ()=> console.log("Port number is "+ port + "."))
