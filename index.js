const express = require('express');
const mongoose = require("mongoose");
const dotEnv = require('dotenv');
const userRoutes = require('./Routers/Routes');
const tweetRoute = require('./Routers/tweetRoute')
const bodyParser = require("body-parser");
const cors = require('cors');


const app = express();
dotEnv.config();
app.use(cors());


app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started and running in ${PORT}`);
})


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI) 
        console.log("MongoDB Connected Successfully")
    }catch(err) {
        console.log(err)
    }
}
connectDB()


app.use("/api/users", userRoutes);
app.use("/api", tweetRoute);

app.get("/" , (req, res) => {
    res.send("................welcome");
})



