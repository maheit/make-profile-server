"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var test_route_1 = __importDefault(require("./test/test-route"));
var account_1 = __importDefault(require("./user-account/account"));
var AppRoutes = (function () {
    function AppRoutes() {
        this.router = express_1.default.Router();
        this.initRouters();
    }
    AppRoutes.prototype.initRouters = function () {
        this.router.use('/test', test_route_1.default);
        this.router.use('/user-account', account_1.default);
    };
    return AppRoutes;
}());
exports.default = AppRoutes;
//# sourceMappingURL=routes.js.map