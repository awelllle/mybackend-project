import { config } from 'dotenv'
config()

import * as express from 'express';
import * as bodyParser from "body-parser";


import * as cors from 'cors'

import { Routes } from './routes';


class App {
    public app: express.Application;
    public route: Routes = new Routes();
    
    constructor() {
        this.app = express();
        this.config();
        this.route.routes(this.app);
        
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({  limit: '50mb', extended: false}));
        this.app.use(cors());

        // this.app.use(
        //     cors({
        //       origin: '*',
        //       optionsSuccessStatus: 200,
        //     })
        //   )


          //Enable CORS from client side
        //     this.app.use(function (req, res, next) {
        //     res.header("Access-Control-Allow-Origin", "*");
        //     res.header('Access-Control-Allow-Methods', 'PUT,GET,DELETE,POST,OPTIONS');
        //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization' +' Access-Control-Allow-Credential');
        //         res.header('Access-Control-Allow-Credentials', 'true');

        //     next();
        // });

    }

}

export default new App().app;