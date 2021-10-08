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
        type: Number,
        required:true
    },
    price:{
        type:String,
    }
})

//Creo un Id virutal para no usar el default de Mongo
usersSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

usersSchema.set('toJSON', {
    virtuals:true
})

exports.Users = mongoose.model('Users', usersSchema)
