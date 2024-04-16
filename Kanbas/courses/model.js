import mongoose from "mongoose";
import courseSchema from "./schema.js";
import courses from "../Database/courses.js";
const courseModel = mongoose.model("Course", courseSchema);
export default courseModel;