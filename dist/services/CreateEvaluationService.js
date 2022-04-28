"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvaluationService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const uuid_1 = require("uuid");
class CreateEvaluationService {
    async execute(evaluation) {
        const { note, name, email, id_movie } = evaluation;
        const id = (0, uuid_1.v4)();
        const result = await prisma_1.default.evaluation.create({
            data: {
                id,
                note,
                name,
                email,
                id_movie
            }
        });
        return result;
    }
}
exports.CreateEvaluationService = CreateEvaluationService;
