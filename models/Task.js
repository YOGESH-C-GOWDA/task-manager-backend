const mongoose = require("mongoose");

// let createDateRandom = 1 + Math.floor(Math.random() * 20) + 1;



const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        max: [50, "Maximim  50 charecters allowed"]
    },
    email: {
        type: String,
    },
    role: {
        type: String,
        max: [50, "Maximim  50 charecters allowed"],
    },
    title: {
        type: String,
        max: [150, "Maximim  50 charecters allowed"],
        required: [true, "Please add Title"]
    },
    description: {
        type: String,
        // max: [500, "Maximim  500 charecters allowed"],
        required: [true, "Please enter Description"]
    },
    status: {
        type: String,
        default: 'pending'
    },
    review: {
        type: String,
        max: [500, "Maximim  500 charecters allowed"],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },


    // Schema edit according to Dev express - bhim

    // title: 'Website Re-Design Plan', //**** we have title with same spelling */
    startDate: {
        type: Date,
        default: new Date(2020, 9, 2, 9, 35)
    },
    endDate: {
        type: Date,
        default: new Date(2020, 9, 3, 9, 35)
    },
    location: {
        type: String,
        default: 'Room 1'
    }
})

module.exports = mongoose.model('Task', TaskSchema);