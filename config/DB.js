require("dotenv").config();
const mongoose = require('mongoose');

async function connectDB() {
    try {
       
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected successfully.");
        
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = connectDB;
