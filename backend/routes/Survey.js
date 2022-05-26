const router=require('express').Router()
const surveyController=require('../controllers/Survey')

router.post('/', surveyController.saveSurvey);


module.exports=router;