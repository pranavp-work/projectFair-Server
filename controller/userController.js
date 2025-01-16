// exports.register = (req, res) => {
//     const {username, email, password} = req.body;
//     console.log(username, email, password);
//     console.log('inside register function');
// }

const users = require("../model/userModel");

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
                profile,
                linkedin,
                github
            })
            newUser.save()
            await res.status(200).json(newUser)
        }
    } catch (error) {
        res.send(401).json(error);
    }
    
    // res.send('test');
}