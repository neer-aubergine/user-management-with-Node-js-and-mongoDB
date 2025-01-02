import express from "express"
import dotenv from 'dotenv';
import dbconnect from "./server/database/connection.js";
import userRoutes from './server/routes/router.js';

//const routes = import("./server/routes")
const app = express();
dotenv.config()
const PORT = process.env.PORT || 8080;
dbconnect();
app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});