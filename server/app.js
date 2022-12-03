const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Ok");
})

// Middleware
app.use(express.json());

// database conection
main().catch((error) => console.log(error));

async function main() {
    await mongoose.connect("mongodb+srv://nitwrohit12345:Rohit12345@cluster0.mjzehea.mongodb.net/booklistmern?retryWrites=true&w=majority");
    console.log("Database connected");
}


app.listen(3000, () => {
    console.log("Server started at 3000 port....")
})