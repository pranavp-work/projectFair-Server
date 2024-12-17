const express = require('express');
const cors = require('cors');
const router = require('./router')

const server = express();

const PORT = 4000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

// server using cors
server.use(cors());

// parse the data
server.use(express.json());

// server.get('/', (req, res) => {
//     res.send('get request recieved');
// })

// server.post('/', (req,res) => {
//     res.send('post request recieved');
// })

// server.put('/', (req, res) => {
//     res.send('put request recieved');
// })

// server.delete('/', (req, res) => {
//     res.send('delete request recieved');
// })