import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'dotenv/config'
import Auth from './Controllers/Auth.js'

const app = express();

const PORT = process.env.PORT || 3000;


//Some Boiler Plate
app.use(express.json({
    limit: '50mb'
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  
  
  //db
  mongoose.connect(process.env.Mongo_ConnectionString);
    
    const db = mongoose.connection;
    db.on("error", function () {
      console.log("Error Connecting");
    });
    
    
    db.on("open", function () {
      console.log("Successfull Connected to Database ");
    });

    //Routes
    app.use(Auth);


    //Server Listen

    app.listen(PORT , ()=>{
        console.log(`Server is running on ${PORT}`)
    })