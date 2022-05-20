const router=require('express').Router();
const {register,login,theGoals}=require('../controller/users')
const {protect}=require('../middleWares/Auth')






router.post('/',register)
router.post('/login',login)
router.get('/me',protect,theGoals)



module.exports=router;