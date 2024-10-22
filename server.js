import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from "morgan"
import indexRouter from './router/index.js'
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";
import bad_request from "./middlewares/bad_request.js";

const server = express();

const PORT = process.env.PORT || 8080;

const ready = ()=> console.log("server ready in port :"+PORT);

server.use(express.json())  //permite trabajar con formato json en estrada y salida 
server.use(express.urlencoded({ extended: true }))
server.use(cors())  //permite trabajar con cors 
server.use(morgan('dev')) //morgan controla y ver las trazas de las peticiones que nos hagan

//router
server.use('/api',indexRouter)
server.use(not_found_handler)
server.use(bad_request)
server.use(error_handler)


server.listen(PORT,ready);
