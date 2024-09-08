import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://<email>:<password>@cluster0.dn9jrpd.mongodb.net/TOMATO')
    .then (() => console.log("DB CONNECTED"));
}
