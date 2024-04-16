import courseModel from "./model.js";
export const findAllCourses = () => courseModel.find();
export const findCourseById = (_id) => courseModel.findById(_id);
export const findCoursesByDepartment = (department) => courseModel.find({department: department});
export const createCourse = async (course) => {
    const findMaxCourseId = await courseModel.findOne({}, {_id: 1}, {sort: {_id: -1}});
    const numericalPart = findMaxCourseId ? parseInt(findMaxCourseId._id.slice(2)) + 1 : 101;
    course._id = "RS" + numericalPart.toString();
    if (!course.image) {
        course.image = "reactjs.webp";
    }
    const createCourse = await courseModel.create(course);
    return createCourse;
}
export const updateCourse = (id, course) => courseModel.updateOne({_id: id}, {$set: course});
export const deleteCourse = (id) => courseModel.deleteOne({_id: id});