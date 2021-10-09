const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    score:{
        type: Array,
        required:true
    }
})

exports.Users = mongoose.model('Users', usersSchema)
