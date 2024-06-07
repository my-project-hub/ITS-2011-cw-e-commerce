import mongoose, { Mongoose } from "mongoose";

import { Schema } from "mongoose";

export const userSchema = new Schema({
    fullName: {type:String, null:false},
    email: {type:String, null:false},
    password: {type:String, null:false},
    address: String,
    phoneNumber: Number,
    registerDate: {type:Date , default:Date.now()}
})

const User = mongoose.model("User",userSchema);
export default User;