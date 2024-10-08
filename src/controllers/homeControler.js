import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.hbs');
});
router.get('/about', (req, res)=>{
    res.render('home/about');
})

export default router;