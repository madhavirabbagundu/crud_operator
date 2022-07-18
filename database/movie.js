const  mongoose  = require("mongoose");

const  movieName = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
        image:String,
        packInfo:String

})
const movieData = new mongoose.model("movie",movieName)
 module.exports= movieData