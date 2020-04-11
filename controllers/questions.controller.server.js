const questionsService = require('../services/questions.service.server')

module.exports = function(app) {
  app.get('/api/quizzes/:qzid/questions', (req,res) => {
    const quizId = req.params['qzid']  
    questionsService.findAllQuestionsForQuiz(quizId).then(questions => res.json(questions))
    
  })

  app.get('/api/questions', (req, res) => 
    questionsService.findAllQuestions().then(allQuestions => res.send(allQuestions)))
    

  app.get('/api/questions/:id', (req, res) => 
    questionsService.findQuestionById(req.params['id']).then(question => res.json(question)))
}

