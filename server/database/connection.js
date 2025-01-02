// const mongoose = require('mongoose');
// const connectDB = async () => {
//    try {
//     const con = await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log(`MongoDB connected: ${con.connection.host}`);
//    } catch (error) {
//     console.error(err);
//    process.exit(1);
//    }
//  };
//   module.exports = connectDB;





import mongoose from "mongoose";
const connection = {}
export const dbconnect = async() => {
    try {
        if(connection.isConnected){
            console.log("database already connected")
            return
        }
        const db = await mongoose.connect(process.env.MONGO_URI, {
            dbName:"USER-MANAGEMENT"
        });
    
        connection.isConnected = db.connections[0].readyState;

        console.log("mongodb connected");
    } catch (error) {
        console.log(error);
    }
    
}
export default dbconnect