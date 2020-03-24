const quizzes = [
  {_id: "123", title: "Quiz 1"},
  {_id: "234", title: "Quiz 2"},
  {_id: "345", title: "Quiz 3"},
]

findAllQuizzes = () => quizzes
findQuizById = (qzid) => 
  quizzes.find(quiz => quiz._id === qzid);

module.exports = {
  findAllQuizzes,
  findQuizById
}