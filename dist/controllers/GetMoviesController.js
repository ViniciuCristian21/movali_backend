"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoviesController = void 0;
const GetMoviesService_1 = require("../services/GetMoviesService");
class GetMoviesController {
    async handle(req, res) {
        const service = new GetMoviesService_1.GetMoviesService();
        const result = await service.execute();
        return res.json(result);
    }
}
exports.GetMoviesController = GetMoviesController;
