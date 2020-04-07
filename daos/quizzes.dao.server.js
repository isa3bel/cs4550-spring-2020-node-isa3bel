const quizzesModel = require("../models/quizzes/quizzes.model.server");

const findAllQuizzes = () => { 
  return quizzesModel.find().populate('questions')
}


const findQuizById = (qid) => {
  return quizzesModel.findById(qid).populate('questions');
};

module.exports = { findAllQuizzes, findQuizById };


