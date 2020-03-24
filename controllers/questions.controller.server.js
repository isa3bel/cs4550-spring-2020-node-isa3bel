const questionsService = require('../services/questions.service.server')

module.exports = function(app) {
  app.get('/api/quizzes/:qzid/questions', (req,res) => {
    const quizId = req.params['qzid']  
    const questions = questionsService.findAllQuestionsForQuiz(quizId)
    res.json(questions)
  })

  app.get('/api/questions', (req, res) => {
    const questions = questionsService.findAllQuestions()
    res.json(questions)
  })

  app.get('/api/questions/:id', (req, res) => {
    res.json(questionsService.findQuestionById(req.params['id']))
  })
}

