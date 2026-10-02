import express from "express";
import usersRouter from "./routes/users.route.js";
import {errorHandler} from "./middleware/error.middlewares.js"
import sequelize from "./config/database.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3002;

sequelize.authenticate().then(async ()=>{
    await sequelize.sync({alter:true});
        console.log("Database connected successfully");
    }).catch(async (error)=>{
        console.log("Database connection failed", error);
    });

// Routers
app.use("/users",usersRouter)


// http://localhost:3002/users/
// 404
app.use((req,res)=>{
        res.status(404).json({
                success:false,
                message:"Router not found"
        })
})
// errorhandler
app.use(errorHandler)
// linting 
app.listen(PORT,()=>{
        console.log("server ishlamoqda...")
})
