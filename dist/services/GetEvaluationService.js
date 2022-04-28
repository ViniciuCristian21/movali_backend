"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEvaluationService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class GetEvaluationService {
    async execute() {
        const result = await prisma_1.default.evaluation.findMany({
            include: {
                movie: true
            }
        });
        return result;
    }
}
exports.GetEvaluationService = GetEvaluationService;
