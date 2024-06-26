import mongoose, { Schema, Types } from "mongoose";

const productSchema = new Schema({
    title:String,
    purchased:Number,
    selling:Number,
    offered:Number,
    subCategory:{type:Types.ObjectId,ref:"SubCategory"},
    description:String,
    featureProduct:{type:Boolean,default:false},
    trendingProduct:{type:Boolean,default:false},
    topSellingProduct:{type:Boolean,default:false},
    refundable:String,
    warranty:String,
    images:[String],
    unit:Number
});

const productModel = mongoose.model('Product',productSchema);
export default productModel;