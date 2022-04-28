import prismaClient from '../prisma'

class GetEvaluationService {
    async execute() {
        const result = await prismaClient.evaluation.findMany({
            include: {
                movie: true
            }
        })

        return result;
    }

}


export {GetEvaluationService};