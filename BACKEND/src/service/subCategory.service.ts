import { Request } from "express";
import subCategoryModel from "../model/subcategory.model";
import { findCategory } from "./category.service";

export async function saveSubCategory(req,res){
    
    const {subCategoryName, categoryId} = req.body;
    
    try{
        const subCategory = await subCategoryModel.create({
            subCategoryName,
            categoryId
        })

        await subCategory.save();
        res.status(201).end()

    }catch(e){
        console.error(e);
        res.status(500).send({error:"internal server error"});
    }   
}

export async function getSubCategories(req:Request,res){
    
    const {categoryId} = req.params;
    console.log(req.params)
    
    try{
         const subCategoryList = await subCategoryModel.find({categoryId})
         res.send({data:subCategoryList})
    }catch(e){
        console.log(e);
    }
}

export async function findSubCategory(req, res) {

    try {
        const {_id} = await findCategory(req,res);
        let {subCategory} = req.params
        subCategory = subCategory.replace('-',' ')
        console.log(subCategory)
        const category = await subCategoryModel.findOne({ subCategoryName:subCategory,categoryId:_id });
        return category;
    } catch (e) {
        console.log(e)
        res.status(500).send({error:"internal server error"})
    }
}