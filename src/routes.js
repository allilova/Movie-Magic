import { Router } from "express";
import homeControler from './controllers/homeControler.js'

const router = Router();


router.use(homeControler);

export default router;