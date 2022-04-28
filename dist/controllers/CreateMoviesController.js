"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMoviesController = void 0;
const CreateMoviesService_1 = require("../services/CreateMoviesService");
class CreateMoviesController {
    async handle(req, res) {
        const { title, description, classification, launched_in } = req.body;
        const service = new CreateMoviesService_1.CreateMoviesSevice();
        const result = await service.execute({
            title,
            description,
            classification,
            launched_in
        });
        return res.json(result);
    }
}
exports.CreateMoviesController = CreateMoviesController;
