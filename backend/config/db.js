const mongoose=require('mongoose');


const connect=async ()=>{
  try{
   const connect= await mongoose.connect(process.env.MONGO_URL)
   console.log('CONNECTED')
  }catch(err){
    console.log(err)
  }
}

module.exports={
  connect
}