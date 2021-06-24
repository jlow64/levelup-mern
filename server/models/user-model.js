const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    parentPhoneNumber: {
        type: String,
        required: true
    },
    parentEmail: {
        type: String,
        required: true,
        unique: true
    },
    interestedCourse: {
        type: String
    },
    preferredStartDate: {
        type: String
    },
    referalSource: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('users', User)