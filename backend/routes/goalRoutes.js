const express=require('express');
const {getGoals,setGoals,updateGoals,deleteGoal}=require('../controller/goals')
const{protect}=require('../middleWares/Auth')

const router=express.Router();



router.get('/',protect,getGoals)

router.post('/',protect,setGoals)

router.put('/:id',protect,updateGoals)
router.delete('/:id',protect,deleteGoal)


module.exports=router