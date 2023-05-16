import mongoose from "mongoose";
import dotenv from "dotenv/config";
import { Class } from "../models/class/classModel.js";

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    w: "majority"})
.then(() => {
    console.log("Connected to Database");})
.catch((error) => {
    console.log(error);
});



const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to mongoose."))

/*
const newClass = new Class({
class: "Barbarian",
// any other properties you want to set for the new document
});
  
await newClass.save();
*/
//const classes = await Class.find({});
//console.log(classes);


export default db;