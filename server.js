const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 

const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:isa3bel@ds215089.mlab.com:15089/heroku_7r7qnwb9', 
{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
      "*"); 
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)




app.get('/', function(req, res) {
  res.send('hello world')});

app.listen(process.env.PORT || 3000)