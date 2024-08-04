const express = require("express");
const tweet = require('../controllers/tweetController');


const Router = express.Router();



Router.post('/tweets', tweet);

Router.get('/sample', () => "hello")



module.exports =  Router