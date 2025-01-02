import {Userdb} from '../models/userModel.js';

export const createUser = async (userData) => {
    const user = new Userdb(userData);
    return await user.save();
};

export const deleteUser = async (userId) => {
    return await Userdb.findByIdAndDelete(userId);
};

export const updateUser = async (userId, userData) => {
    return await Userdb.findByIdAndUpdate(userId, userData, { new: true });
};

export const getUser = async (userId) => {
    return await Userdb.findById(userId);
};

export const getAllUsers = async () => {
    return await Userdb.find();
};
