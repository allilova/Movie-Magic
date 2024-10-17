import express from "express";
import handlebars from 'express-handlebars';
import routs from './routes.js';
import mongooseInit from "./config/mongooseInit.js";

const app = express();
mongooseInit();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use(routs);


app.listen(5000, () => console.log('Server on http://localhost:5000...'));