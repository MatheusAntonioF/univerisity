import express, { Express } from 'express';

import routes from './routes';

import connectionDB from './database';

class App {
  public server: Express;

  constructor() {
    this.server = express();

    connectionDB();

    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
