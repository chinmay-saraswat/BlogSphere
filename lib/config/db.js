import mongoose from "mongoose";

export const ConnectDB=async ()=>{
   await mongoose.connect("mongodb+srv://{username}:{password}@cluster0.hrogdi9.mongodb.net/Blog")
   console.log("DB connected")
}
