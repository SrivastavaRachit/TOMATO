import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// APP CONFIG
const app = express()
const port = 4000

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// DB CONNECTION 
// mongodb+srv://rachitsrivastava0406:<password>@cluster0.dn9jrpd.mongodb.net/?
connectDB();

// API ENDPOINTS
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

app.use("/api/cart", cartRouter)

app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API WORKING")
})


app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
