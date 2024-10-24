import { Router } from "express";

import movieService from "../service/movieService.js";
import castService from "../service/castService.js";

const router = Router();

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;

    await movieService.create(movieData);

    res.redirect('/');
});

router.get('/search', async (req, res) =>{
    const filter = req.query;
    const movies = await movieService.getAll(filter).lean();

    res.render('home', {isSearch: true, movies, filter});
});

router.get('/:movieId/details', async(req, res) =>{
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();

    res.render('movies/details', {movie});
});

router.get('/:movieId/attach', async (req, res) =>{
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAllWithout(movie.casts).lean(); 

    res.render('movies/attach', { movie, casts });
});
router.post('/:movieId/attach', async (req, res) =>{
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    const character = req.body.character;

    await movieService.attach(movieId, castId, character);

    res.redirect(`/movies/${movieId}/details`);
});

function toArray(documents){
    return documents.map(document => document.toObject());
}

export default router;