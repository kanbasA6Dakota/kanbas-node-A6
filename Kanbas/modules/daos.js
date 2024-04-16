import modulesModel from "./model.js";
export const findAllModules = () => modulesModel.find();
export const findModuleById = (_id) => modulesModel.findById(_id);
export const createModule = async (courseId, module) => { 
    const maxIdModule = await modulesModel.findOne({}, {_id: 1}, {sort: {_id: -1}});
    const numericalPart = maxIdModule ? parseInt(maxIdModule._id.slice(1)) + 1 : 101;
    module._id = "M" + numericalPart.toString();
    module.course = courseId;
return modulesModel.create(module);
}
export const updateModule = (id, module) => modulesModel.updateOne({_id: id}, {$set: module});
export const deleteModule = (id) => modulesModel.deleteOne({_id: id});