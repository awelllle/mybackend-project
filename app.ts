import { config } from 'dotenv'
config()

import * as express from 'express';
import * as bodyParser from "body-parser";


import * as cors from 'cors'

import { Routes } from './routes/index';
class App {
    public app: express.Application;
    public route: Routes = new Routes();
    
  constructor() {
    this.app = express();
    this.config();
    this.route.routes(this.app);
        
    }

    private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({  limit: '50mb', extended: false}));
    this.app.use(cors());

    }

}

export default new App().app;
