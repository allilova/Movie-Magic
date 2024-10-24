import express from "express";
import handlebarsInit from "./config/handlebarsInit.js";
import routs from './routes.js';
import mongooseInit from "./config/mongooseInit.js";

const app = express();
mongooseInit();
handlebarsInit(app);


app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use(routs);


app.listen(5000, () => console.log('Server on http://localhost:5000...'));