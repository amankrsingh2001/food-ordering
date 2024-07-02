import mongoose from "mongoose";

export const connectdb = async () =>{
    await mongoose.connect('mongodb+srv://amandev:727296015@cluster0.yff37w4.mongodb.net/food-app')
    .then(()=>console.log("DB connected"))
    .catch((e)=>(console.log("Error in db connection",e)))
   
}