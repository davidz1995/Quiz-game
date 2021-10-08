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
    incorrectAnswer:{
        type:Array,
        required:true
    }
})

//Creo un Id virutal para no usar el default de Mongo
questionsSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

questionsSchema.set('toJSON', {
    virtuals:true
})

exports.Questions = mongoose.model('Questions', questionsSchema)
