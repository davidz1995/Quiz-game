const mongoose = require('mongoose');

const questionsSchema = mongoose.Schema({
    question: {
        type:String,
        required:true
    },
    difficulty: {
        type:Number,
        required:true
    },
    correctAnswer: {
        type:String,
        required:true
    },
    answers:{
        type:Array,
        required:true
    },
    prize:{
        type:String,
        required:true
    }
})

exports.Questions = mongoose.model('Questions', questionsSchema)
