
const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
});

const Tweet =  mongoose.model("Tweets", UserModel);

module.exports = Tweet