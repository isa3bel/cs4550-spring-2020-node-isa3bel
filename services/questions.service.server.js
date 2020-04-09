const questions = require('./questions.json')
const questionsDao = require('../daos/questions.dao.server')

const findAllQuestions = () => questionsDao.findAllQuestions();
const quizzesDao = require('../daos/quizzes.dao.server')

const findQuestionById = (qid) =>  
  questionsDao.findQuestionsById(qid);

const findAllQuestionsForQuiz = (qzid) =>
  quizzesDao.findQuizById(qzid).then(quiz => quiz.questions)

module.exports = {
  findAllQuestions,
  findQuestionById,
  findAllQuestionsForQuiz
}