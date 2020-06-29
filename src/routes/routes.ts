import express from 'express';

import testRouter from './test/test-route';
import userAccountRouter from './user-account/account';

class AppRoutes {
    private router = express.Router();
    constructor() {
        this.initRouters();
    }
    private initRouters() {
        this.router.use('/test', testRouter);
        this.router.use('/user-account', userAccountRouter);
    }
}

export default AppRoutes;
