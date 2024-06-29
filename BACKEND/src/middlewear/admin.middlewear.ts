import { Request } from 'express';
import jwt from 'jsonwebtoken'
import adminModel from '../model/admin.model';

export default function adminAuth(req: Request, res, next) {
    try {

        const headers = req.headers;
        console.log(headers)
        const token = headers['authorization'].toString().split(' ')[1];
        if (!token) res.status(401).send({ error: "unautorized" });

        const payload: any = jwt.verify(token, process.env.ACCESSTOKEN_KEY);
        console.log(payload);
        const admin = adminModel.findById(payload._id)
        if (!admin) res.status(401).send({ error: "unautorized" });

        next()
    } catch (e) {
        console.log(e);
        res.status(401).send({ error: "unautorized" });
    }

}