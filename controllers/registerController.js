
const userModel = require('../Models/UserModel');
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs")


const registerController = expressAsyncHandler(async (req, res) => {
    const {username, password} = req.body

    //pre existing User
    try {
        const isUserNameExists = await userModel.findOne({username})
        if (isUserNameExists) {
            res.status(409).json({message: "UserName Already Exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({username, password: hashedPassword})

        if (user) {
           return res.status(201).json({message: "User Added successfully", username, id: user._id })
        }
    }catch(err) {
        console.log(err)
        return res.status(500).json({message: "Internal server Error"})
        
    }
    
});


module.exports = registerController