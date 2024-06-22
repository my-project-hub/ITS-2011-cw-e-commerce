import { Request, Response } from "express";
import usermodel from "../model/user.model";
import bcrypt from 'bcryptjs'

export async function validateUser(req:Request,res:Response){
    const {email,password} = req.body;
    //check the user available with the requested email
    const user = await usermodel.findOne({email});
    if(!user) res.json({message:"can not found user with email"}).status(401).send()

    //if user is avaialble check the password
    const validate = bcrypt.compareSync(user.password , password)
    if(!validate) res.json({message:"password is wrong"}).status(401).send()

    res.end();
}