const express = require('express');


const app = express();
const dotenv =require("dotenv");
const mongoose =require("mongoose");
const cors =require("cors");

dotenv.config();
// cntct to db

mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true ,useNewUrlParser:true},
    
).then((res) => {
    console.log("Connected");
})
.catch((err) =>{
    console.log("not connected",err);
})
//import routes
const newsRoutes = require("./routes/news");
//MIDDLEWAREs
app.use(express.json());
app.use(cors());

//route Middleware
app.use("/api/newss",newsRoutes)


app.listen(3000 ,() => {
    console.log("server is running at 3000")

});

