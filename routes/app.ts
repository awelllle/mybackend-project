import { AppController } from '../controllers/app';
import {rateLimiter} from '../utils/middleware/rate-limiter';

export class AppRoutes {
    public appController: AppController = new AppController();

    public routes(app): void {
        app.route('/howold').get([rateLimiter], this.appController.howOld)
    }
}