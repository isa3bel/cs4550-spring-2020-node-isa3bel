const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://heroku_7r7qnwb9:fldkfkq0eo3hc66i6s8j81stm5@ds215089.mlab.com:15089/heroku_7r7qnwb9', 
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
      "https://cs4550-isabel-b-hw9-angular.herokuapp.com/"); 
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
require('body-parser')(app)



app.get('/hello', (req, res) =>
  res.send('hello world'));

app.listen(process.env.PORT || 3000)