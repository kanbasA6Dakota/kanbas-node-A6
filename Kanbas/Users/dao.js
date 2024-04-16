import model from "./model.js";
export const createUser = async (user) => {
    const maxIdUser = await model.findOne({}, {_id: 1}, {sort: {_id: -1}});
    const newId = maxIdUser ? parseInt(maxIdUser._id) + 1 : 1;
    user._id = newId.toString();
    return model.create(user);
}
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => model.findOne( { username: username});
export const findUserByCredentials = (username, password) => model.findOne({username, password});
export const updateUser = (userId, user) => model.updateOne({_id: userId}, {$set: user});
export const deleteUser = (userId) => model.deleteOne({_id: userId});
export const findUsersByRole = (role) => model.find({ role: role });