import express from "express"
import cors from 'cors'
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoutes.js"
import dotenv from 'dotenv'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

dotenv.config({
    path: './.env'
})

// app config
const app = express()

const port = process.env.PORT || 4000

// middleware
app.use(express.json()) // Whenever we get the req from frontend to backend that will be parsed into json
app.use(cors()) // using this we can access bacend from frontend

// DB connection
connectdb()
//api endpoint
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)

app.use('/api/cart',cartRouter)

app.use('/api/order',orderRouter)
app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port,()=>{
    console.log(`App is listining on ${port}`)
})

