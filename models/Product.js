import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
    title: {type:String,required:true},
    availabeQty: {type:Number,required:true},
   
  },{timestamps:true});
mongoose.models={}
  export default mongoose.model("Product",ProductSchema)
