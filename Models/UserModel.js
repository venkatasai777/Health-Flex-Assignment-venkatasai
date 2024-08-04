
const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timeStamp: true
});

const User =  mongoose.model("User", UserModel);

module.exports = User