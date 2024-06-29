import { Router } from "express";
import { findProductById, findProductListByCategoryAndSubCcategory, imageBase64Convert, saveProduct } from "../service/product.service";
import multer from 'multer'
import adminAuth from "../middlewear/admin.middlewear";

const storage = multer.memoryStorage();
const upload = multer({storage})

const product = Router();

product.post('/image',upload.single('product_image'),imageBase64Convert)
product.post('',adminAuth,saveProduct)
product.get('/:category/:subCategory',findProductListByCategoryAndSubCcategory)
product.get('/:productId',findProductById)



export default product