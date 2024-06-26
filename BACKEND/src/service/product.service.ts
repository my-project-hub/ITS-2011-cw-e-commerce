import { encodeBase64 } from "bcryptjs";
import { Request, Response } from "express";
import productModel from "../model/product.model";
import { findCategory } from "./category.service";
import { findSubCategory } from "./subCategory.service";

export async function imageBase64Convert(request: Request, response: Response) {
    try {
        const file = request.file
        const base64Image = file.buffer.toString('base64');
        // console.log(request.file.buffer.length)


        // console.log(encoded);

        response.json({ base64Image: 'data:image/jpeg;base64,' + base64Image }).send();
    } catch (e) {
        console.log(e);
        response.status(500).json({ error: "internal server error" }).send()
    }

}

export async function saveProduct(req, res) {
    try {
        const requestBody = req.body;
        requestBody.images = requestBody.images.map((element) => element.base64Image)
    
        const product = await productModel.create({
            ...requestBody
        });

        await product.save();
        res.status(201).end();

    } catch (e) {
        console.error(e);
        res.status(500).send({ error: "internal server error" })
    }
}

export async function findProductListByCategoryAndSubCcategory(req,res){
    try{
        const {_id} = await findSubCategory(req,res);
        const products = await productModel.find({subCategory:_id})
        res.send({data:products});
    }catch(e){
        console.log(e)
    }
}