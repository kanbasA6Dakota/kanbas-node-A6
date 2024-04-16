import mongoose from "mongoose";
import assignmentSchema from "./schema.js";
const assignmentModel = mongoose.model("assignmentModel", assignmentSchema);
export default assignmentModel;