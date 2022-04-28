"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMoviesController = void 0;
const DeleteMoviesService_1 = require("../services/DeleteMoviesService");
class DeleteMoviesController {
    async handle(req, res) {
        const id = req.params.id;
        const service = new DeleteMoviesService_1.DeleteMoviesService();
        const result = await service.execute(id);
        return res.json(result);
    }
}
exports.DeleteMoviesController = DeleteMoviesController;
