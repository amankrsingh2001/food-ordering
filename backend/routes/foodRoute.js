import express from "express"
import { addFood ,listFood,removeFood} from "../controllers/foodController.js"
import { upload } from "../middleware/multer.middleware.js";

const foodRouter = express.Router();

// Image storage Engine



foodRouter.post('/add',upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFood)


export default foodRouter