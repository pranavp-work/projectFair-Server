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

// import cors
const cors = require('cors');

// create server
const server = express();

// set port
const PORT = 4000 || process.env.PORT;

// listen
server.listen(PORT, () => {
    console.log(`Server started at localhost://${PORT}`);  
})

// server using cors
server.use(cors())

// parse upcoming datas -> returns middleware to parse the data
server.use(express.json())

// GET request
server.get('/', (req, res) => {
    res.send('GET request recieved!');
})

// POST request
server.post('/', (req, res) => {
    res.send('POST request sent success!');
})

// PUT request
server.put('/', (req, res) => {
    res.send('PUT request sent success!');
})

// DELETE request
server.delete('/', (req, res) => {
    res.send('DELETE request sent success!');
})