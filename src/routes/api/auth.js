import { Router } from 'express';
import AuthController from '../../app/controllers/AuthController';
import auth from '../../app/middlewares/auth';

const routes = new Router();

routes.post('/login', AuthController.login);

routes.post('/register', AuthController.register);

routes.post('/me', auth, AuthController.me);

export default routes;
