const quizAttemptDao = require('../daos/quiz-attempts.dao.server')
var bodyParser = require('body-parser')

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())
   app.post('/api/quizzes/:qid/attempts', (req, res) =>
       quizAttemptDao.createAttempt( req.params.qid, req.body)
           .then(attempt => res.send(attempt)))
           
   app.get('/api/quizzes/:qid/attempts', (req, res) =>
       quizAttemptDao.findAttemptsForQuiz(req.params.qid)
           .then(attempts => res.send(attempts)))
}
