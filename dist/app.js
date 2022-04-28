"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverHttp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const router_1 = require("./router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const serverHttp = http_1.default.createServer(app);
exports.serverHttp = serverHttp;
app.use(express_1.default.json());
app.use(router_1.router);
