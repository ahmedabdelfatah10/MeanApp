const User=require('../model/usersmodel');
const asynchandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken');


const register=asynchandler(async(req,res)=>{
  const {name,email,password}=req.body;
 
  if(!name || !email || !password){
    res.status(400);
    throw new Error ('please add all fields')
  }
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const salt=await bcrypt.genSalt(10);
  const hashed=await bcrypt.hash(password,salt)

  const user=await User.create({
    name,
    email,
    password:hashed
  })
  if(user){
    res.status(201).json({
      _id:user.id,
      name:user.name,
      email:user.email,
      token:generateToken(user.id)
    })
  }else{
    res.status(400)
    throw new Error('Invalid user data')
  }

     
})

const login=asynchandler(async(req,res)=>{
  const {email,password}=req.body;
  if(!email || !password){
    res.status(400)
    throw new Error('fields are required')
  }
   const user =await User.findOne({email})


   if(user && (await bcrypt.compare(password,user.password))){
     res.json({
       _id:user.id,
       name:user.name,
       email:user.email,
       token:generateToken(user.id)
     })
   }else {
    res.status(400)
    throw new Error('Invalid credentials')
  }

})


const theGoals=asynchandler(async(req,res)=>{
  res.status(200).json(req.user)
})


module.exports={
  register,
  login,
  theGoals
}

const generateToken=(id)=>{
  return jwt.sign({id},process.env.SECRET_KEY,{
    expiresIn:'30d'
  })

}