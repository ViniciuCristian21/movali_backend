"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvaluationController = void 0;
const CreateEvaluationService_1 = require("../services/CreateEvaluationService");
class CreateEvaluationController {
    async handle(req, res) {
        const { note, name, email, id_movie } = req.body;
        const service = new CreateEvaluationService_1.CreateEvaluationService();
        const result = await service.execute({
            note,
            name,
            email,
            id_movie
        });
        return res.json(result);
    }
}
exports.CreateEvaluationController = CreateEvaluationController;
