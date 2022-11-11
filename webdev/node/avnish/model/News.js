const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title:String,
    article:String,
    image:String,
    details:String

});


const news = mongoose.model("News",newsSchema)//cretae a database if there will be no folder with i t will create a basic folder with product
module.exports = news