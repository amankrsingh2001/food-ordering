import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET// Click 'View Credentials' below to copy your API secret
    });

    const uploadOnClodinary = async(localFilePath) =>{
    
        try {
            if(!localFilePath){
                console.log("Cannot find local file path")
                return null
            }
            //upload the file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            }).catch((error)=>{console.log(error)})
            //file has been uploaded
            console.log("file is uploaded on cloudinary",response.url)
            fs.unlinkSync(localFilePath)
            return response

        } catch (error) {
            fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload operation failed
            console.log(error)
        }
    }
    export {uploadOnClodinary}