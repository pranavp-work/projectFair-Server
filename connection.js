// import mongoose
const mongoose = require('mongoose');
const connectionString = process.env.DB_URL;

mongoose.connect(connectionString).then((response) => {
    console.log(`MongoDB connected succesfully!`);
}).catch((err) => {
    console.log(`MongoDB connection ERROR`, err);
})