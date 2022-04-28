import prismaClient from '../prisma'

class DeleteMoviesService {
    async execute(id) {

        const result = await prismaClient.movies.delete({
            where: {
                id: id,
            }
        })

        return result;
    }

}


export {DeleteMoviesService};