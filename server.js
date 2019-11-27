const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/App-Propostas'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/dist/App-Propostas/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
