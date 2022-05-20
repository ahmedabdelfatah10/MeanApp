const express=require('express');
const dotenv = require('dotenv').config()
const cors=require('cors')
const { errorHandler } = require('./middleWares/Error')
const {connect}=require('./config/db')
connect();

const app=express();
const port=process.env.PORT || 9000
app.use(cors({"origin":"*",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"Access-Control-Allow-Headers":['Content-Type', 'Authorization'] }))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/UserRoutes'))
app.use(errorHandler)


app.listen(port,()=>{
  console.log(`listening in ${port}`)
})