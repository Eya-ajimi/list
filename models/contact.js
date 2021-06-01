const mongoose=require("mongoose")
const contactSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    tel:{

     type:Number
    },
    dateofcreation:{
        type:Date,
        default:Date.now()

    }
})
module.exports=mongoose.model("contact",contactSchema)