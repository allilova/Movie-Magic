import { Router } from "express";
import homeControler from './controllers/homeControler.js';
import movieController from './controllers/movieController.js';

const router = Router();


router.use(homeControler);
router.use('/movies', movieController);
router.all('*', (req, res) => {
    res.render('404');
})

export default router;