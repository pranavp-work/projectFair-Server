exports.register = (req, res) => {
    const {username, email, password} = req.body;
    console.log(username, email, password);
    console.log('inside register function');
}