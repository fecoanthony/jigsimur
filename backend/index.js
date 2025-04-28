import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";
import mailRoutes from "./routes/mailsending.js"


const app = express()
dotenv.config()

const db = process.env.MONGO_DB
const port = process.env.PORT || 5000

// CORS Configuration
const allowedOrigins = [
    "http://localhost:5173",           // for local development
    "https://jigsimur-7.onrender.com"   // your deployed frontend URL
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));
app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser())


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/", mailRoutes);

mongoose.connect(db).then(() => {
    console.log("Connected to DB")
}).catch(err => console.log(err))
app.listen(port, () => {
    console.log("Server started on port 5000", db)
})