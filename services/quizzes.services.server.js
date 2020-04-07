// const quizzes = [
//   {_id: "123", title: "Quiz 1"},
//   {_id: "234", title: "Quiz 2"},
//   {_id: "345", title: "Quiz 3"},
// ]

const quizzesDao = require('../daos/quizzes.dao.server')

findAllQuizzes = () => quizzesDao.findAllQuizzes()
findQuizById = (qzid) => quizzesDao.findQuizById(qzid)
  
module.exports = {
  findAllQuizzes,
  findQuizById
}