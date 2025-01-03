import express from "express";
const route = express.Router();

import { userCreate , userDelete , userUpdate , userGet , userGetAll , userLogin} from '../controllers/controller.js';
import { validateUserCreate, validateUserLogin } from '../middleware/validation.js';
route.post('/api/add-user', validateUserCreate, userCreate);
route.delete('/api/users/:id', userDelete);
route.put('/api/users/:id', userUpdate);
route.get('/api/users/:id', userGet);
route.get('/api/users', userGetAll);
route.post('/api/login', validateUserLogin, userLogin);

export default route

