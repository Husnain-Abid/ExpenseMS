const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/userRoute");
const transectionRoute = require("./routes/transectionRoute");
const bodyParser = require("body-parser")
const path = require("path")

dotenv.config()

connectDB()

const app = express();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.json())
//routes
app.use('/user', userRouter);
app.use('/transection', transectionRoute);

app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

const PORT = 8080 || process.env.PORT

app.listen(PORT , ()=>{
    console.log("server is running", PORT );
})