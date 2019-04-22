//Install express server for Heroku
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
});

// Default Heroku port
app.listen(process.env.PORT || 8080);
