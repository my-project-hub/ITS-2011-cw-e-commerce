import { Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcryptjs"



export async function registerUser(req , res:Response){
    console.log(req.body);
    const {email, fullName, password} = req.body

    const isFound = await User.findOne({email});
    if(isFound){
        res.send().status(500).json({error:"email already registered"}) 
        // throw new Error();
        return ""
    } 

    const hasedPasssword = bcrypt.hashSync(password,4);
    const user = await User.create({email,fullName,password:hasedPasssword});
    user.save()

    res.send("register user")
}

