const Joke = require("../models/jokes.model"); 

// Create
module.exports.createJoke = (req, res) => {
    Joke.create(req.body) 
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong with creating Joke", error: err}))
}

// Read One 
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(singleJoke => res.json(singleJoke))
        .catch(err => res.json({message: "Something went wrong with finding one joke", error: err}))
}

// Read All
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(AllJokes => res.json(AllJokes))
        .catch(err => res.json({message: "Something went wrong with finding all jokes", error: err}))
}

// Update
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updateJoke => res.json(updateJoke))
        .catch(err => res.json({message: "Something went wrong with updating one joke", error: err}))
}

// Delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deleteJoke => res.json(deleteJoke))
        .catch(err => res.json({message: "Something went wrong with deleting one joke", error: err}))
}
