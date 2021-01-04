import dotenv from 'dotenv';

dotenv.config({
  path: process.env.APP_ENV === 'test' ? '.env.test' : '.env',
});

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import './app/models/index';
import apiAuthRoutes from './routes/api/auth';
import apiHomeRoutes from './routes/api/home';

import { corsOptions } from './config/cors';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/auth', apiAuthRoutes);
    this.app.use('/api', apiHomeRoutes);
  }
}

export default new App().app;
