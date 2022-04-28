import { Request, Response} from 'express';
import { GetEvaluationService } from '../services/GetEvaluationService';


class GetEvaluationController {
    async handle(req: Request, res: Response){
        const service = new GetEvaluationService()

        const result = await service.execute()

        return res.json(result)

    }
}

export {GetEvaluationController}