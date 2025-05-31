const express=require("express")
const { login,userRegister } = require("../controller/user")

const router=express.Router()


router.post("/register",userRegister)
router.post("/login",login)
module.exports=router