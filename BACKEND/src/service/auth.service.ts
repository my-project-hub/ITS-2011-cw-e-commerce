import { Request, Response } from "express";
import usermodel from "../model/user.model";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import adminModel from "../model/admin.model";

export async function validateUser(req: Request, res: Response) {
    try {

        const { email, password } = req.body;
        //check the user available with the requested email
        const user = await usermodel.findOne({ email });
        if (!user) throw new Error("can not found user with email");

        //if user is avaialble check the password
        const validate = bcrypt.compareSync(password, user.password)
        if (!validate) throw new Error("password is wrong")

        const accessToken = jwt.sign(
            {
                _id: user.id,
                email: user.email,

            },
            process.env.REFRESHTOKEN_KEY
        )

        // res.cookie("acessToken",accessToken,{httpOnly:true,secure:true}).send();
        res.json({accessToken}).send();

    } catch (e) {
        if (e.message === "can not found user with email") res.status(401).json({ message: e.message }).send()
        if (e.message === "password is wrong") res.status(401).json({ message: e.message }).send()
        res.status(500).send()
    }

}


export async function validateAdmin(req: Request, res: Response) {
    try {

        const { email, password } = req.body;
        //check the user available with the requested email
        const admin = await adminModel.findOne({ email });
        if (!admin) throw new Error("can not found user with email");

        //if user is avaialble check the password
        const validate = false;
        if(!(admin.password === password)) throw new Error("password is wrong")
        // if (!validate) throw new Error("password is wrong")

        const accessToken = jwt.sign(
            {
                _id: admin.id,
                email: admin.email,

            },
            process.env.REFRESHTOKEN_KEY
        )

        // res.cookie("acessToken",accessToken,{httpOnly:true,secure:true}).send();
        res.json({accessToken}).send();

    } catch (e) {
        if (e.message === "can not found user with email") res.status(401).json({ message: e.message }).send()
        if (e.message === "password is wrong") res.status(401).json({ message: e.message }).send()
        res.status(500).send()
    }

}