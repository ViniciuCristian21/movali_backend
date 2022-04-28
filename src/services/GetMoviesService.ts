import prismaClient from '../prisma'
class GetMoviesService {
    async execute() {
        const result = await prismaClient.movies.findMany();

        return result;

    }

}


export {GetMoviesService};