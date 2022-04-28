import { Request, Response} from 'express';
import { CreateEvaluationService } from '../services/CreateEvaluationService';


class CreateEvaluationController {
    async handle(req: Request, res: Response){
        const {note, name, email, id_movie} = req.body;

        const service = new CreateEvaluationService();

        const result = await service.execute({
            note,
            name,
            email,
            id_movie
        })

        return res.json(result)

    }
}

export {CreateEvaluationController}