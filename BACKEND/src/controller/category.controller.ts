import { Router } from "express";
import { getAllCategories, saveCategory } from "../service/category.service";

const category = Router()

category.post('/',saveCategory);
category.get('/',getAllCategories);


export default category;