"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMoviesService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class DeleteMoviesService {
    async execute(id) {
        const result = await prisma_1.default.movies.delete({
            where: {
                id: id,
            }
        });
        return result;
    }
}
exports.DeleteMoviesService = DeleteMoviesService;
