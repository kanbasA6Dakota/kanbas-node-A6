import assignmentModel from "./model.js";
export const findAllAssignment = () => assignmentModel.find();
export const findAssignmentById = (_id) => assignmentModel.findById(_id);
export const createAssignment = async (courseId, assignment) => {
    const maxIdAssignment = await assignmentModel.findOne({}, {_id: 1}, {sort: {_id: -1}});
    const numericalPart = maxIdAssignment ? parseInt(maxIdAssignment._id.slice(1))+1 : 101;
    assignment._id = "A" + numericalPart.toString();
    assignment.course = courseId;
    return assignmentModel.create(assignment);  
}
export const updateAssignment = (id, assignment) => assignmentModel.updateOne({_id: id}, {$set: assignment});
export const deleteAssignment = (id) => assignmentModel.deleteOne({_id: id});