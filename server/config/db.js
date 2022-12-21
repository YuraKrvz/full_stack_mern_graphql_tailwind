const mongoose = require('mongoose');
// require('dotenv').config({path:__dirname+'/./../../../.env'});//added

const connectDB = async ()=> {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB -- start: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;