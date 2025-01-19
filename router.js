// const express = require('express');

// const userController = require('./controller/userController');

// // create an instance for router
// const router = new express.Router();

// module.exports = router;

// import express
const express = require('express');

// import userController
const userController = require('./controller/userController');

// import projectController
const projectController = require('./controller/projectController');

// import jwtMiddleware
const jwtMiddleware = require('./middleware/jwtMiddleware');

// create instance router
const router = new express.Router();

// REGISTER
router.post('/register', userController.register)

// LOGIN
router.post('/login', userController.login)

// ADD PROJECTS (FORM-DATA)
router.post('/addProjects', jwtMiddleware, projectController.addProjects)

module.exports = router