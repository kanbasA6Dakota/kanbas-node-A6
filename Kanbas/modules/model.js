import mongoose from "mongoose";
import courses from "../Database/courses.js";
import modulesSchema from "./schema.js";
const modulesModel = mongoose.model("Module", modulesSchema);
export default modulesModel;