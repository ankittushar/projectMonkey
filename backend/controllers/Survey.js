const SurveyModel=require('../models/Survey');



exports.saveSurvey=( async(req,res)=>{
    const model= new SurveyModel(req.body);
    try{
        const saving= await model.save();
        res.json(saving);

    }catch(error){
        res.json(error);
    }
})