"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerMiddleware = function (req, res, next) {
    console.log('Request logged ' + req.ip + ' : ' + req.method + ' : ' + req.path);
    next();
};
exports.default = LoggerMiddleware;
//# sourceMappingURL=LoggerMiddleware.js.map