const mongoose = require("mongoose");

const userTask = new mongoose.Schema({
    email : {
        type : String,
        required : [true, "Email should not greater than 20 charcters"],
        uuique : true,
        minlength : [4, "Email should be at least 4 characters"]
    },
    password : {
        type : String,
        required : true,
        unique : true
    }
});

const userModel = mongoose.model("blogs", userTask);

module.exports = userModel;