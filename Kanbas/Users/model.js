import mongoose from "mongoose"; 
import schema from "./schema.js"; 
import users from "../Database/users.js";
const model = mongoose.model("UserModel", schema); 
export default model;