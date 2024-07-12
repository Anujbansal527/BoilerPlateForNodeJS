const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const Database = require('./Config/Database');
const router = require("./Routes/Example-Rooutes");

const app = express()

const PORT = process.env.PORT

app.use(cors())

app.use(express.json())

app.use("/api",router)

Database()

app.listen(PORT,()=> {
    console.log(`Sucessfully connected to PORT ${PORT}`)
})