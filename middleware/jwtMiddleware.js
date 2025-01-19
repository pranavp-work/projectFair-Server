const jwtMiddleware = (req, res, next) => {
    console.log('inside jwt Middleware');

    const token = req.headers['authorization']
    console.log(token);

    next();
}

module.exports = jwtMiddleware