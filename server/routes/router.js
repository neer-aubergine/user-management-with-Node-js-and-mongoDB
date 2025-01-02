import express from "express";
export const route = express.Router();

const services = import('../services/render');
const controller = import('../controller/controller');



route.get('/', services.homeRoutes);
route.get('/add-user', services.add_user);
route.get('/update-user', services.update_user);


route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

export default route

