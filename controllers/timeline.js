const expressAsyncHandler = require("express-async-handler");
const tweet = require('../Models/tweetModel');
const jwt = require("jsonwebtoken");


const timeline = expressAsyncHandler(async (req, res) => {
    try {
        const token = await req.headers.token 
        const { userId }= req.params
    
        if (!token) {
            return res.status(401).json({message: "JWT Token Required - Unauthorized Access"})
        }
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    
        const isValidId = decoded.id === userId
        if (!isValidId) {
            return res.status(401).json({message: "Invalid UserId"})
        }
        const allTweets =  await tweet.find()
        
        const Results = {
            userId,
            allTweets : allTweets.filter(each => String(each.userId === userId))
        }
        return res.status(200).json({message: "Query Successfull", Data: Results})
    }catch(err) {
        console.log(err)
        return res.status(500).json({message: "Internal Server Error"})
    }
});


module.exports = timeline