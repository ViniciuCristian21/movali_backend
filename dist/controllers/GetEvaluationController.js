"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEvaluationController = void 0;
const GetEvaluationService_1 = require("../services/GetEvaluationService");
class GetEvaluationController {
    async handle(req, res) {
        const service = new GetEvaluationService_1.GetEvaluationService();
        const result = await service.execute();
        return res.json(result);
    }
}
exports.GetEvaluationController = GetEvaluationController;
