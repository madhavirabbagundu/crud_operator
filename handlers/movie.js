const movieData = require("../database/movie");

async function allMovie(req,res,next){
    const movie = await movieData.find();
    return res.send({
        data1:movie
    })

}

async function singleMovie(req,res,next){
    const {id} = req.params;

    const movie = await movieData.findById(id)
    if(movie){
        return res.send({
            data1:movie
        })
    }
    else{
        return res.status(404).send({
            error:"movie with given id doesnot exit"
        })
    }
}

async function createmovie(req,res,next){
    const { movie : movieData1 } = req.body;
    let movie = new movieData(movieData1)
    await movie.save();

    return res.send({
        message:"movie has added"
    });

}

async function updateData(req,res,next){
    const { movie:movieData1} = req.body;
    const {id:movieId} = req.params;

    // let movie = await movieData.updateOne({
    //     id:movieId
    // },movieData1)

    let movie = await movieData.findById(movieId)
   for(const [key,value] of Object.entries(movieData1)){
    movie[key] = value;
   }
   await movie.save();

      return res.send({
        message:"updated",
        data1:movie,
    })

}


//searchiing
async function searchMovies(req, res) {
    try {
        const  q  = req.query.name;
            // const movie = await movieData.find({name:{$regex:`^${req.query.name.trim()}`,$options: 'i'}});
            let movie = await movieData.find({name: {$regex: q}});
        res.send({
            data1 : movie
        });
    } catch (error) {
    //     // console.log(error);
        return res.status(500).send(error);
    }

}

//pagination

async function pagination(req,res){
    try{
        console.log(req.query)
        const page = req.query.page*1||1;
        const limit=req.query.limit*1||3;
        // const sort = req.query.sort || '-reatedAt';
        const skip = limit*(page-1) 
        let movie = await movieData.find().limit(limit).skip(skip)
        res.send({
            data1:movie
        });
    }
    catch(error){
        return res.status(500).send(error);
    }
}

async function filter(req,res,next){
    const fliter1 = req.query;
    var movie = await movieData.find(fliter1)
    res.send({
        data1:movie
    });


    
}


// async function sortData(req, res, next) {
//     const movies = await movieData.find().sort({price:"1"});

//     return res.send({
//         data1: movies
//     });
// }

module.exports = {
    allMovie,
    singleMovie,
    createmovie,
    updateData,
    // sortData,
    searchMovies,
    // searches
    pagination,
    filter
}