import mongoose from "mongoose";

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

export const Userdb = mongoose.models.userdb || mongoose.model('userdb', schema);