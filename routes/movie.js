const express = require('express')
const movieData = require('../database/movie')
const { allMovie,singleMovie,createmovie,updateData,searchMovies,pagination, filter} = require('../handlers/movie')

const movieRouter = express.Router()

movieRouter.get('/movie/all',allMovie)
movieRouter.get('/movie/id',singleMovie)
movieRouter.post('/movie',createmovie)
movieRouter.patch('/movie/:id',updateData)

movieRouter.get('/movie/all/search',searchMovies)
movieRouter.get('movie/all/page',pagination)
movieRouter.get('movie/all/filtering',filter)




  



module.exports=movieRouter;