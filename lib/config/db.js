import mongoose from "mongoose";

export const ConnectDB=async ()=>{
   await mongoose.connect("mongodb+srv://chinmaysaraswat:0987chinmaysaraswat@cluster0.hrogdi9.mongodb.net/Blog")
   console.log("DB connected")
}