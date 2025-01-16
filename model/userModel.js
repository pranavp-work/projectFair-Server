// import mongoose
const mongoose = require('mongoose');

// define schema
const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    profile: {
        type: String
    },
    linkedin: {
        type: String
    },
    github: {
        type: String
    }
})

// create model
const users = mongoose.model("users", userSchema)

// export model
module.exports = users