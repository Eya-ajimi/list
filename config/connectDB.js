 const mongoose =require("mongoose")
const config = require ("config")


 const connectDB=async()=>{
     try{
        await mongoose.connect(config.get("MONGOURI"),{useNewUrlParser: true, useUnifiedTopology: true })
         console.log("Mongoose is connected")

     } catch (err){
         
         console.log(err)
     }
     }

 module.exports=connectDB