import { encodeBase64 } from "bcryptjs";
import { Request, Response } from "express";

export async function imageBase64Convert(request:Request,response:Response){
    try{
    const file = request.file
    const base64Image = file.buffer.toString('base64');
    // console.log(request.file.buffer.length)

   
    // console.log(encoded);

    response.json({base64Image:'data:image/jpeg;base64,'+base64Image}).send();
    }catch(e){
        console.log(e);
        response.status(500).json({error:"internal server error"}).send()
    }

}