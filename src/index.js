import express from "express";
import handlebars from 'express-handlebars';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}))
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Just works');
});

app.listen(5000, () => console.log('Server on http://localhost:5000...'));