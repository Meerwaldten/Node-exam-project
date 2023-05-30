import mongoose from "mongoose";
import dotenv from "dotenv/config";


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

export default db;