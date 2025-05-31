const express=require("express")
const app=express()
const connectDB=require("./db/connection")
const userRouter=require("./router/index")
const bodyParser = require('body-parser')


connectDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port=3000

app.use("/api/user",userRouter)

app.listen(port,()=>{
    console.log(`server run on ${port}`)
})