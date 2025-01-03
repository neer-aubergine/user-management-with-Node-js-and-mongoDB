import {Userdb} from '../models/userModel.js';
import bcrypt from 'bcrypt';
export const createUser = async (userData) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;

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
    return await Userdb.findById(userId).select('-password');
};

export const getAllUsers = async () => {
    return await Userdb.find().select('-password');
};

export const loginUser = async (email, password) => {
    const user = await Userdb.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    return new Object({ message: 'Login successful' ,user : {name : user.name , email : user.email}});
};