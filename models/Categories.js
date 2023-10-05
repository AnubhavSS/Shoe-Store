import mongoose from "mongoose";
const CategorySchema=new mongoose.Schema({
    title: {type:String,required:true},
    company:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
   
  },{timestamps:true});
mongoose.models={}
  export default mongoose.model("Categorie",CategorySchema)