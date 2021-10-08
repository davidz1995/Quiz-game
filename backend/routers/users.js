const express = require('express');
const router = express.Router();
const {Users} = require('../models/users')

router.get(`/`,async (req, res) =>{
    const usersList = await Users.find();
    !usersList? res.status(500).send('User not found'):res.status(200).send(usersList)
})

router.get('/:id',async(req, res) => {
    const user = await Users.findById(req.params.id);
    !user? res.status(500).send('User not found'):res.status(200).send(user);
})

router.post(`/`, async (req, res) =>{
    let user = new Users({
        name: req.body.name,
        email: req.body.email,
        score: req.body.score,
        prize: req.body.prize
    })
    user = await user.save();
    
    !user? res.status(400).send('User can not be created.'): res.status(200).send(user)
})

module.exports = router