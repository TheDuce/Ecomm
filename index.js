// Require express library
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Load startpage html with a get request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/loginform.html');
});




app.post('/', (req, res) => {
  res.send('Account created');
});



// Server start
app.listen(3000, () => {
  console.log('LISTENING');
});