import express from "express";
import handlebars from 'express-handlebars';
import routs from './routes.js';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.use(express.static('static'));
app.use(routs);


app.listen(5000, () => console.log('Server on http://localhost:5000...'));