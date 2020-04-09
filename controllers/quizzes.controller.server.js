const quizService = require("../services/quizzes.services.server");

module.exports = function (app) {
  app.get('/api/quizzes', (req, res) => {
        quizService.findAllQuizzes()
            .then(allQuizzes => res.send(allQuizzes))
  })

  app.get("/api/quizzes/:qid", (req, res) =>
    quizService.findQuizById(req.params["qid"]).then((quiz) => res.json(quiz))
  );
};
