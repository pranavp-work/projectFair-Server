// const express = require('express');

// const userController = require('./controller/userController');

// // create an instance for router
// const router = new express.Router();

// module.exports = router;

// import express
const express = require('express');

// create instance router
const router = new express.Router();

// import userController
const userController = require('./controller/userController');

// REGISTER
router.post('/register', userController.register)

// LOGIN
router.post('/login', userController.login)

module.exports = router