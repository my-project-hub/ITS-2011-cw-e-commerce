import { Request, Response } from "express";
import usermodel from "../model/user.model";
import bcrypt from 'bcryptjs'

export async function validateUser(req: Request, res: Response) {
    try {

        const { email, password } = req.body;
        //check the user available with the requested email
        const user = await usermodel.findOne({ email });
        if (!user) throw new Error("can not found user with email");

        //if user is avaialble check the password
        const validate = bcrypt.compareSync(password, user.password)
        if (!validate) throw new Error("password is wrong")

        res.end();

    } catch (e) {
        if(e.message === "can not found user with email") res.status(401).json({ message: e.message}).send()
        if(e.message === "password is wrong") res.status(401).json({ message: e.message}).send()
        res.status(500).send()
    }

}