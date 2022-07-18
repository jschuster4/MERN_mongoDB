const JokesController = require("../controllers/jokes.controller")

module.exports = app => {
    // create
    app.post("/api/jokes/create", JokesController.createJoke);

    // read one
    app.get("/api/jokes/:_id", JokesController.findOneJoke);

    // read all 
    app.get("/api/jokes", JokesController.findAllJokes);

    // update
    app.put("/api/jokes/update/:_id", JokesController.updateJoke);

    // delete
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke);


}