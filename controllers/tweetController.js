const expressAsyncHandler = require("express-async-handler");
const tweet = require('../Models/tweetModel');
const jwt = require("jsonwebtoken");


const createTweet = expressAsyncHandler(async (req, res) => {
    try {
        const {text} = req.body
        if (!text) {
            return res.status(403).json({message: "Tweet Text is mandatory"})
        }
        const token = await req.headers.token 
        if (!token) {
            return res.status(401).json({message: "JWT Token Required - Unauthorized Access"})
        }
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        const createTweet = await tweet.create({userId: decoded.id, text, createdAt: String(new Date())})
        const data = await  createTweet.save()
        return res.status(200).json({message: "Tweet Posted Successfully", data})
    }catch(err) {
        console.log(err)
        return res.status(500).json({message: "Internal Server Error"})
    }
});


module.exports = createTweet