const express = require('express');
const path = require('path');
const app = express();
const public = path.join(__dirname, 'public');
const nedb = require('nedb');
const mustache = require('mustache-express')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));

const router = require('./routes/fitnessRoutes');
app.use('/', router); 



app.use(function(req, res) {
 res.status(404);
 res.send('Oops! We didn\'t find what you are looking for.');
})

app.listen(3000, () => {
 console.log('Server started on port 3000. Ctrl^c to quit.');
})

app.engine('mustache', mustache());

app.set('view engine', 'mustache');



