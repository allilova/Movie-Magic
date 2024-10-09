import uniqid from 'uniqid';

import movieData from '../data/movieData.js';
import { log } from 'console';

const getAll = async (filter = {}) => {
    let movies = await movieData.getAll();

   
}