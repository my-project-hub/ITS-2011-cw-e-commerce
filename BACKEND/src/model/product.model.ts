import mongoose, { Schema, Types } from "mongoose";

const productSchema = new Schema({
    title:String,
    purchased:Number,
    selling:Number,
    offered:Number,
    subCategory:{type:Types.ObjectId,ref:"SubCategory"},
    description:String,
    featureProduct:Boolean,
    trendingProducts:Boolean,
    topSellingProducts:Boolean,
    refundable:String,
    warranty:String
});

const productModel = mongoose.model('Product',productSchema);
export default productModel;