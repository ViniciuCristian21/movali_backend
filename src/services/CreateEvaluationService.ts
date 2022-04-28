import prismaClient from '../prisma'
import { v4 as uuid } from 'uuid';
interface IEvaluation {
    note: number,
    name: string,
    email: string,
    id_movie: string
}
class CreateEvaluationService {
    async execute(evaluation: IEvaluation) {
        const {note, name, email, id_movie} = evaluation;
        const id = uuid();
        const result = await prismaClient.evaluation.create({
            data: {
                id,
                note,
                name,
                email,
                id_movie
            }
        })

        return result;
    }

}


export {CreateEvaluationService};