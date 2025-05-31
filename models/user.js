const mongooes=require("mongoose")

const userSchema=new mongooes.Schema({
name:{
  type:String,
  required:[true,"name is required"]
},
email:{
  type:String,
  required:[true,"email is required"]
},
password:{
  type:String
},
role:{
  type:String
}
})
const User=mongooes.model("User",userSchema)
module.exports=User