"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMoviesSevice = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const uuid_1 = require("uuid");
class CreateMoviesSevice {
    async execute(movies) {
        const { title, description, classification, launched_in } = movies;
        // ver se ja existe algum filme com mesmo nome
        const userAllReadyExists = await prisma_1.default.movies.findFirst({
            where: {
                title,
            }
        });
        if (userAllReadyExists) {
            return {
                error: "Movie all ready exists"
            };
        }
        // Criar id
        const id = (0, uuid_1.v4)();
        // salvar no banco
        const result = await prisma_1.default.movies.create({
            data: {
                id,
                title,
                description,
                classification,
                launched_in
            }
        });
        return result;
    }
}
exports.CreateMoviesSevice = CreateMoviesSevice;
