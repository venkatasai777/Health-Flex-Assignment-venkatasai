const express = require("express");
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const timeline = require('../controllers/timeline')


const Router = express.Router();



Router.post('/login', loginController);
Router.post('/register', registerController);
Router.get('/:userId/timeline', timeline)



module.exports =  Router