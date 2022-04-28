"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoviesService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class GetMoviesService {
    async execute() {
        const result = await prisma_1.default.movies.findMany();
        return result;
    }
}
exports.GetMoviesService = GetMoviesService;
