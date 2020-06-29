import * as bodyParser from 'body-parser';
import LoggerMiddleware from './middlewares/LoggerMiddleware';

import Route from './routes/routes';
import App from './app';

import firebaseAdminSDK from './services/firebase/sdk-admin';
import env from 'dotenv';

env.config();

const Server = new App({
    port: 5000,
    routers: [new Route()],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        LoggerMiddleware,
    ],
    services: [firebaseAdminSDK],
});

Server.listen();
