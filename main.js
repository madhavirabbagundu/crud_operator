const express = require('express')
const cors = require('cors')
const connectRes = require('./database/data')
const movieRouter = require('./routes/movie')

const app = express()
app.use(express.json())
// app.use(cors())

app.use(movieRouter);

app.use(logger);
function logger(req,res,next){
    console.info(new Date(), req.method, req.path);
    next()
}

connectRes().then(()=>{
app.listen(3001,()=>{
    console.log("server is working at http://localhost:3001")
})
})