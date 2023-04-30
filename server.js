import  Express  from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.mongooseConnectionUrl);

const app = Express();



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');


app.listen(process.env.port,()=>{

    //console.log("started the app on http://localhost:"+PORT);
    console.log(`started the app on http://localhost:${process.env.port}`);
});