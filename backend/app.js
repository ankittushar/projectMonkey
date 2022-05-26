const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

const app=express();

const SurveyRoutes=require('./routes/Survey');

mongoose.connect(
    "mongodb://localhost:27017/monkey"
   
);

mongoose.connection.on('connected',()=>{
   console.log("connected to mongo db");
});

mongoose.connection.on('error',err=>{
   console.log("error at mongo" + err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/survey',SurveyRoutes);


module.exports=app;