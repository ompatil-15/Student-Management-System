const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    rollno: {
        type: String,
        require: true,
    },
    class: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        lowercase: true,
        enum: ['it', 'cse', 'entc']
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    attendance: {
        type: String,
        required: true
    }      
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

