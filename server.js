const express= require ("express")
const connect= require("./config/connectDB")
const cros=require("cors")
//instancation
const app=express()
//middleware
 app.use(express.json())
 app.use (cros())
//connect to data base
connect()
//routes
app.use("/api/contacts",require("./routes/contact"))
//port 
const port = 7000
app.listen(port ,err=>{
    err?console.log (err):console.log (`server is runnig on ${port}`)
})