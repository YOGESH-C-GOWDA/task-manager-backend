const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        max: [50, "Maximim  50 charecters allowed"],
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter email"],
        match: [/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Please add a valid email"]
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    role: {
        type: String,
        enum: ['user'],
        default: 'user'
    },
    createdOn: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('User', UserSchema);