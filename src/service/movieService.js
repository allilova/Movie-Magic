import Movie from '../models/Movie.js';

const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if(filter.search){
        moviesQuery.find({ title: {$regex: filter.search, $options: 'i'}});
    }

    if(filter.genre){
        moviesQuery.find({ genre: filter.genre.toLowerCase()});
    }

    if(filter.year){
        moviesQuery.find({year: filter.year });
    }

    return moviesQuery;
};

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId).populate('casts.cast'); 

const attach = (movieId, castId, character) => {
    return Movie.findByIdAndUpdate(movieId, { $push: { casts: {cast: castId, character}}});
}

export default {
    getAll,
    create,
    getOne,
    attach
}