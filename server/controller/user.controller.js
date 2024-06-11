import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"


export const signup=async(req,res)=>{
    try {
        const{name,email,password}=req.body
        const user=await User.findOne({email:email})
        if(user){
            res.status(400).json({message:"email allready exists"})
            return;
        }
        const hashPassword=await bcryptjs.hash(password,10)
        const newUser= new User({...req.body,password:hashPassword})
        await newUser.save()
        res.status(201).json({message:"user created successfully",user:newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        return;

    }
}

export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email})
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            res.status(400).json({message:"Invalid Email id or password"})
            return ;
        }
        else{
            res.status(200).json({message:"Login successfully",user:user})
            return;
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        return;

    }
}