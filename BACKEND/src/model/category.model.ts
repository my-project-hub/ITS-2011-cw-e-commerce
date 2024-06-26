import mongoose, { Schema } from "mongoose";

const categorySchema =  new Schema({
    categoryName:{type:String, null:false,unique:true}
})

const categoryModel = mongoose.model('Category',categorySchema);
export default categoryModel;


