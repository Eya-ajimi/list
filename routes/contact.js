const express = require("express")
const contact = require("../models/contact")
const router = express.Router()
//path : http://localhost:7000/api/contacts/addcontact
// create contact 
//public or private 
router.post  ("/addcontact",async(req,res)=>{
    try {
        //req.body={name:"ali", email:"ali@gmail.com",tel:125}
        const newcontact=   new contact({
              ...req.body
        }) 
        const user= await newcontact.save()
        res.json({msg:"user add",user})
    } catch (err) {
        console.log(err)
    }
    

})
// path : http://localhost:7000/api/contacts/
//get all contacts
//public or private
router.get("/",(req,res)=>{
    contact.find()
    .then(contacts=> res.json({msg:"data fetched",contacts}))
    .catch(err=>console.log(err))
})
//http://localhost:7000/api/contacts/:id/
// delete contact
//public or private

router.delete("/:id/",(req,res)=>{
    contact.findOneAndDelete({_id:req.params.id})
    .then(contact=> res.json({msg:"user deleted",contact}))
    .catch(err=>console.log(err))
})
//http://localhost:7000/api/contacts/:id/
// edite contact
//public or private
router.put ("/:id/",(req,res)=>{
    //req.body ={name:"adem",tel:55489628}
    contact.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
    .then(contact=> res.json({msg:"user edited",contact}))
    .catch(err=>console.log(err))

})

module.exports= router