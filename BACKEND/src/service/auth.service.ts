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
            process.env.ACCESSTOKEN_KEY
        )


        const refresh = jwt.sign(
            {
                _id: user.id,
                email: user.email,

            },
            process.env.REFRESHTOKEN_KEY
        )

        // res.cookie("acessToken",accessToken,{httpOnly:true,secure:true}).send();
        res.cookie("token", refresh, { httpOnly: true, secure: true }).send({ data: { accessToken } });

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
        if (!(admin.password === password)) throw new Error("password is wrong")
        // if (!validate) throw new Error("password is wrong")

        const accessToken = jwt.sign(
            {
                _id: admin.id,
                email: admin.email,
                
            },
        
            process.env.REFRESHTOKEN_KEY,
            { expiresIn: '2m' }
        )

        const refresh = jwt.sign(
            {
                _id: admin._id,
                email: admin.email,

            },
            process.env.REFRESHTOKEN_KEY
        )


        // res.cookie("acessToken",accessToken,{httpOnly:true,secure:true}).send();
        res.cookie("token", refresh, { httpOnly: true, secure: false, sameSite:"lax"});
        res.send({ data: { accessToken } });
        // res.cookie("token", refresh, { httpOnly: true, secure: true }).send({ data: { accessToken } });

    } catch (e) {
        if (e.message === "can not found user with email") res.status(401).json({ message: e.message }).send()
        if (e.message === "password is wrong") res.status(401).json({ message: e.message }).send()
        res.status(500).send()
    }
}


export async function getNewAccessToken(req: Request, res: Response) {
    
    try {
    const { token } = req.cookies;
    console.log(req.cookies);
    console.log(token)

    if(!token) throw new Error("token can not found")

    const userPayload:any = jwt.verify(token,process.env.REFRESHTOKEN_KEY,);
    

        if(!userPayload)res.status(401).send({error:"un authorized"})
        // const user = jwt.verify(token,process.env.REFRESHTOKEN_KEY);
        
        // const { email, password } = req.body;
        //check the user available with the requested email
        const user = await adminModel.findById(userPayload._id);
        
        const accessToken = jwt.sign(
            {
                _id: user._id,
                email: user.email,

            },
            process.env.ACCESSTOKEN_KEY,
            { expiresIn: '2m' }
        )
        console.log("--------------------------------")
        // res.cookie("acessToken",accessToken,{httpOnly:true,secure:true}).send();
        res.send({ data: { accessToken } });
        

    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "internal server error" })
    }

}