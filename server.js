var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic(__dirname +'', {'index': ['index.html']});

// Create server
var server = http.createServer(function(req, res){
    var done = finalhandler(req, res)
    serve(req, res, done)
})

// Listen
server.listen(process.env.PORT || 3000);