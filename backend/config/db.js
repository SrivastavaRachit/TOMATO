import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rachitsrivastava0406:rs6518619@cluster0.dn9jrpd.mongodb.net/TOMATO')
    .then (() => console.log("DB CONNECTED"));
}