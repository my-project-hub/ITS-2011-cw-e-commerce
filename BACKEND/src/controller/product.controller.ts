import { Router } from "express";
import { findProductListByCategoryAndSubCcategory, imageBase64Convert, saveProduct } from "../service/product.service";
import multer from 'multer'

const storage = multer.memoryStorage();
const upload = multer({storage})

const product = Router();

product.post('/image',upload.single('product_image'),imageBase64Convert)
product.post('',saveProduct)
product.get('/:category/:subCategory',findProductListByCategoryAndSubCcategory)



export default product