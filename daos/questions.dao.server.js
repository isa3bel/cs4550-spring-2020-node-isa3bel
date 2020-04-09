const questionsModel = require('../models/questions/questions.model.server')

findAllQuestions = () => questionsModel.find()

findQuestionsById = (qid) => questionsModel.findById(qid)

module.exports = {
  findAllQuestions,
  findQuestionsById
}