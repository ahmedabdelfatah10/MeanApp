const mongoose=require('mongoose');



const GoalsSchema=mongoose.Schema({
  text:{
    type:String,
    required:[true,'please add text field']
  },user:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'User'
  }},
  {
    timestamps:true
  }
)


module.exports=mongoose.model('Goal',GoalsSchema)