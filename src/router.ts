import express from 'express';

const routers = express.Router();

import UsersController from './controllers/UserController';

routers.get('/users', UsersController.index);
routers.get('/create', UsersController.create);

export default routers;