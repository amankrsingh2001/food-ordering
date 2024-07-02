import foodModel  from "../models/foodmodel.js";
import fs from 'fs'
import { uploadOnClodinary } from "../config/cloudinary.js";


// add food item

const addFood = async(req,res)=>{

    try {
        if(!req.file){
            return res.status(400).json({success:false,message:"No image uploaded"})
        }
        console.log(req.file)

        const cloudinaryResponse = await uploadOnClodinary(req.file.path);
        if(!cloudinaryResponse){
            return res.status(500).json({success:false,message:"Failed to uplaod on cloudinary"});
        }
        let image_filename = `${req.file.filename}`
        const food = new foodModel({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:cloudinaryResponse.url,
            category:req.body.category
        })
        await food.save();
        console.log(food);
        res.json({success:true,message:'Food Added'})
    } catch (error) {
        console.log("Error",error)
        res.status(500).json({success:false,message:"Error in Adding food"})
    }

    //;

    // const food = new foodModel({
    //     name:req.body.name,
    //     description:req.body.description,
    //     price:req.body.price,
    //     image:image_filename ,
    //     category:req.body.category
    // })
    // try{
    //     await food.save();
    //     console.log(food)
    //     res.json({success:true,message:"Food Added"})
    // }catch(e){
    //     console.log("Error",e)
    //     res.json({scuuess:false,message:"Error"})
    // }

}

//All food list
    const listFood = async(req,res)=>{
        try{
            const foods =await foodModel.find({})
            res.json({success:true,data:foods}) 
        }catch(e){
            console.log('Error',e);
            res.json({success:false,message:"Error"})
        }
    }

    // remove food item

    const removeFood = async(req,res)=>{
        try{
            const food = await foodModel.findById(req.body.id);
            fs.unlink(`uploads/${food.image}`,()=>{})
            await foodModel.findByIdAndDelete(req.body.id)
            res.json({success:true,message:"Food Removed"})
        }catch(e){
            console.log('Error',e);
            res.json({success:false,message:"Error"})
        }
    }


export {addFood,listFood,removeFood} 