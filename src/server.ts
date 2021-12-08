import "reflect-metadata";
import express, { response } from "express";
//@types/express -D
import "./database";

const app = express();




//http://localhost:3000
app.listen(3000, () => console.log("Server is running on port 3000 !"))
