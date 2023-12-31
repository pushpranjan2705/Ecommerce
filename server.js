import express from "express";
//const colors = require('colors')
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoute from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import  cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';







import {fileURLToPath} from 'url';
dotenv.config();

connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("/api/v1/auth", authRoutes);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/product',productRoutes);
//rest api

app.get('/', (req,res)=>{
   res.send({
      message:'welcome to ecommerce app'
   })
})

const PORT= process.env.PORT ||8080;

app.listen(PORT, ()=>{
   console.log(`server Running on ${PORT}`.bgCyan.white);
})
