"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = (function () {
    function App(appInit) {
        this.app = express_1.default();
        this.port = appInit.port;
        this.init = appInit;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.routers);
        this.assets();
        this.template();
    }
    App.prototype.services = function (services) {
        services.forEach(function (service) {
            service();
        });
    };
    App.prototype.middlewares = function (middleWares) {
        var _this = this;
        middleWares.forEach(function (middleWare) {
            _this.app.use(middleWare);
        });
    };
    App.prototype.routes = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use('/api', controller.router);
        });
    };
    App.prototype.assets = function () {
    };
    App.prototype.template = function () {
        console.log('We are not using any templates');
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            _this.services(_this.init.services);
            console.log("App listening on the http://localhost:" + _this.port);
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map