import mongoose, { Schema, Types } from "mongoose";

const subCategorySchema = new Schema({
    subCategoryName:{type:String},
    categoryId:{type:Types.ObjectId,ref:"Category"}
});

const subCategoryModel = mongoose.model("SubCategory",subCategorySchema);
export default subCategoryModel;
