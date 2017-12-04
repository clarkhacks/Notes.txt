// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var fs = require('fs');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/notes", function (request, response) {
  response.send(notes);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/notes", function (request, response) {
  var note_id = request.query.name;
  var file_location = "./public/" + note_id + ".txt";
  notes.push("/" + note_id);
  fs.writeFile(file_location, request.query.note, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved: " + file_location);
}); 
  response.sendStatus(200);
});

// Simple in-memory store for now
var notes = [
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
