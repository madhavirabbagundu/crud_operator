const mongoose = require('mongoose')

async function connectRes(){
    const dbUrl = "mongodb://localhost:27017/ecommerce"

    try{
    const response=await mongoose.connect(dbUrl)
    console.log('success')
    }catch(ex){
        console.log("error",ex.message)
    }

}
module.exports=connectRes;