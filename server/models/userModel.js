import mongoose from "mongoose";

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    password: {
        type : String,
        required: true,
        minlength: 6
    }
});

export const Userdb = mongoose.models.userdb || mongoose.model('userdb', schema);