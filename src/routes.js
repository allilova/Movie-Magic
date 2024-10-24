import { Router } from "express";
import homeControler from './controllers/homeControler.js';
import movieController from './controllers/movieController.js';
import castController from './controllers/castController.js';
const router = Router();


router.use(homeControler);
router.use('/movies', movieController);
router.use('/casts', castController)
router.all('*', (req, res) => {
    res.render('404');
})

export default router;