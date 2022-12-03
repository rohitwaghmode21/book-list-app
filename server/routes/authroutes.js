const express = require("express");
const router = express.Router();

const bodyparser = require("body-parser");
const expressValidator = require("express-validator");

const User = require("../models/users");
const { body } = require("express-validator");

router.post("/login", async(req, res) => {
    try{
        const loginUser = await User.create(req.body);
    }catch(e){
        res.status(404).json({
            status : "Failure",
            message : e.message
        })
    }
})

router.post("/register", async (req, res) => {
    try{
        const registerUser = await User.create();
    }catch(e){
        res.status(403).json({
            status : "Failure",
            message : e.message
        })
    }
})

module.exports = router;