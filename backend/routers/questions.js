const express = require('express');
const router = express.Router();
const {Questions} = require('../models/questions')

router.get(`/`,async (req, res) =>{
    const questionsList = await Questions.find();
    !questionsList? res.status(500).send('Questions not found'):res.status(200).send(questionsList)
})

router.post(`/`, async (req, res) =>{
    let question = new Questions({
        question:req.body.question,
        difficulty: req.body.difficulty,
        correctAnswer: req.body.correctAnswer,
        answers: req.body.answers
    })
    question = await question.save();
    
    !question? res.status(400).send('Question can not be created.'): res.status(200).send(question)
})

module.exports = router