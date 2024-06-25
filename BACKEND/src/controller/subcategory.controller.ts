import { Router } from "express";
import { getSubCategories, saveSubCategory } from "../service/subCategory.service";

const subCategory = Router();

subCategory.post('',saveSubCategory);
subCategory.get('/:categoryId',getSubCategories);


export default subCategory;
