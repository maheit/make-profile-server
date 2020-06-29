"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = __importStar(require("body-parser"));
var LoggerMiddleware_1 = __importDefault(require("./middlewares/LoggerMiddleware"));
var routes_1 = __importDefault(require("./routes/routes"));
var app_1 = __importDefault(require("./app"));
var sdk_admin_1 = __importDefault(require("./services/firebase/sdk-admin"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Server = new app_1.default({
    port: 5000,
    routers: [new routes_1.default()],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        LoggerMiddleware_1.default,
    ],
    services: [sdk_admin_1.default],
});
Server.listen();
//# sourceMappingURL=server.js.map