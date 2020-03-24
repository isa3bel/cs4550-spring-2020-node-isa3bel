const questions = require('./questions.json')

const findAllQuestions = () => questions;
const findQuestionById = (qid) =>   
  questions.find(q => q._id === qid);
const findAllQuestionsForQuiz = (qzid) =>
  questions.filter(q => q.quizId === qzid);

module.exports = {
  findAllQuestions,
  findQuestionById,
  findAllQuestionsForQuiz
}