

const mongoose = require('mongoose')
const dotenv = require("dotenv").config()

const URL = process.env.DB_URL;

const Database = async() => {
    await mongoose.connect(URL,{})
    .then(()=> console.log("Successfully Connected to Database"))
    .catch((error) => console.log(error))
}

module.exports = Database;