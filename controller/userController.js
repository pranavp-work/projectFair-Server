// exports.register = (req, res) => {
//     const {username, email, password} = req.body;
//     console.log(username, email, password);
//     console.log('inside register function');
// }

// import users
const users = require("../model/userModel");

// import JWT (Json Web Token)
const jwt = require('jsonwebtoken');

// register
exports.register = async (req, res) => {
    console.log('inside register function');

    const {username, email, password} = req.body
    console.log(username, email, password);

    try {
        // if entered data exists, return already exists
        const existingUsers = await users.findOne({email})

        if(existingUsers) {
            res.status(406).json('Email already exists')
        } else {
            // else add new User, with the data entered
            const newUser = new users({
                username,
                email,
                password,
                profile: "",
                linkedin: "",
                github: ""
            })
            newUser.save()
            await res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error); //sendStatus returns Unathorized, while status returns custom message inside .json()
    }
    
    // res.send('test');
}

// login
exports.login = async (req, res) => {
    console.log('inside login function');

    const {email, password} = req.body
    console.log(email, password);

    try {
        const existingUsers = await users.findOne({email, password})
        if(existingUsers) {
            const token = jwt.sign({userId: existingUsers._id}, "secretKey");
            res.status(200).json({existingUsers, token})
        } else {
            res.status(406).json('email or password wrong!')
        }
    } catch (error) {
        res.status(401).json(error);
    }
    
}