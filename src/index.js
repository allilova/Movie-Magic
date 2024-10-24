import express from "express";
import handlebarsInit from "./config/handlebarsInit.js";
import expressInit from "./config/expressInit.js";
import routs from './routes.js';
import mongooseInit from "./config/mongooseInit.js";

const app = express();
mongooseInit();
handlebarsInit(app);
expressInit(app);

app.use(routs);


app.listen(5000, () => console.log('Server on http://localhost:5000...'));