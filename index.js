var express = require('express')
var app = express()
var path = require('path');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/tech',function(request, response) {
  response.sendFile(path.join(__dirname + '/public/tech.html'))
})

app.get('/thought_concepts',function(request, response) {
  response.sendFile(path.join(__dirname + '/public/thought_concepts.html'))
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
