const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: String, 
    punchLine: String
});

const Joke = mongoose.model("jokes", JokeSchema); 

module.exports = Joke;