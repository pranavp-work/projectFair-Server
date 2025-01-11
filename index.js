// const express = require('express');
// const cors = require('cors');
// const router = require('./router')

// const server = express();

// const PORT = 4000 || process.env.PORT;

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`)
// })

// // server using cors
// server.use(cors());

// // parse the data
// server.use(express.json());

// // server.get('/', (req, res) => {
// //     res.send('get request recieved');
// // })

// // server.post('/', (req,res) => {
// //     res.send('post request recieved');
// // })

// // server.put('/', (req, res) => {
// //     res.send('put request recieved');
// // })

// // server.delete('/', (req, res) => {
// //     res.send('delete request recieved');
// // })

// import express
const express = require('express');

// create server
const server = express();

// import cors
const cors = require('cors');

// import router
const router = require('./router');

// set port
const PORT = process.env.PORT || 4000;

// server using cors
server.use(cors()) // ✅ CORS middleware first

// parse upcoming datas -> returns middleware to parse the data
server.use(express.json());  // ✅ JSON parser before routes

// use router (should always come after middleware)
server.use(router);  // ✅ Router after middleware

// listen
server.listen(PORT, () => {
    console.log(`Server started at localhost://${PORT}`);  
})




// // server.use(express.json())
// server.use(express.json());          // For JSON data
// server.use(express.urlencoded({ extended: true })); // For form data


// // GET request
// server.get('/', (req, res) => {
//     res.send('GET request recieved!');
// })

// // POST request
// server.post('/', (req, res) => {
//     res.send('POST request sent success!');
// })

// // PUT request
// server.put('/', (req, res) => {
//     res.send('PUT request sent success!');
// })

// // DELETE request
// server.delete('/', (req, res) => {
//     res.send('DELETE request sent success!');
// })