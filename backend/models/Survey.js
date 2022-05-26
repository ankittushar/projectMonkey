const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const surveySchema=new Schema({
    username:String,
    category:String,
    questions:Array
},
{timestamps: true}
);

module.exports = mongoose.model('Survey', surveySchema);