import { Request, Response } from "express";
import categoryModel from "../model/category.model";

export async function saveCategory(req: Request, res: Response) {

    try {
        const { categoryName } = req.body;
        const category = await categoryModel.create({ categoryName })
        await category.save()
        res.status(201).end();
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: "internal server error" }).send();
    }
}

export async function getAllCategories(req: Request, res: Response) {
    try {
        const categoryList = await categoryModel.find();
        res.send({ data: categoryList });
    } catch (e) {
        console.error(e)
        res.status(500).send({ error: "internal server error" })
    }
}

export async function findCategory(req, res) {
    console.log(req.params)

    try {
        const {category} = req.params
        const categoryL = await categoryModel.findOne({ categoryName:category })
        console.log(categoryL)
        return categoryL;
    } catch (e) {
        console.log(e)
        res.status(500).send({error:"internal server error"})
    }
}