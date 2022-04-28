import { Request, Response} from 'express';
import { GetMoviesService } from '../services/GetMoviesService';

class GetMoviesController {
    async handle(req: Request, res: Response){
        const service = new GetMoviesService();

        const result = await service.execute();


        return res.json(result)

    }
}



export {GetMoviesController};