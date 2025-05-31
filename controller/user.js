const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const JWT_SEC="Nomi123"

const userRegister = async (req, res) => {
  try {
    const { name, email, password,role  } = req.body;

    const existuser = await User.findOne({ email });
    if (existuser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
      role
    });

    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
//login...................................
const login= async(req,res)=>{
  try {
    const{email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
      return res.status(400).json({message:"invalid Email or password "})
    }
    const matchPassword=await bcrypt.compare(password,user.password)
    if(!matchPassword){
      return res.status(400).json({message:"invalid email or password"})
    }
    //add role in the token 
    const token= jwt.sign({id:user._id},JWT_SEC)
    res.status(200).json({message:"successfully login",user,token})
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:"error"
    })
  }
}
module.exports = {userRegister,login};
