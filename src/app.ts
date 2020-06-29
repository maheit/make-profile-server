import express from 'express';
import { Application } from 'express';
import { ExpressAppInitIF } from './interfaces/server/app-interfaces';

class App {
    public app: Application;
    public port: number;
    public init: ExpressAppInitIF;

    constructor(appInit: ExpressAppInitIF) {
        this.app = express();
        this.port = appInit.port;
        this.init = appInit;

        this.middlewares(appInit.middleWares);
        this.routes(appInit.routers);
        this.assets();
        this.template();
    }

    private services(services: any[]) {
        services.forEach((service) => {
            service();
        });
    }

    private middlewares(middleWares: any[]) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers: any[]) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });
    }

    private assets() {
        // this.app.use(express.static('public'));
        // this.app.use(express.static('views'));
    }

    private template() {
        console.log('We are not using any templates');
        // this.app.set('view engine', 'pug');
    }

    public listen() {
        this.app.listen(this.port, () => {
            this.services(this.init.services);
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}
export default App;
