import { Request, Response} from 'express';
import { DeleteMoviesService } from '../services/DeleteMoviesService';


class DeleteMoviesController {
    async handle(req: Request, res: Response){
        const id = req.params.id;

        const service = new DeleteMoviesService();

        const result = await service.execute(id)
        
        return res.json(result)
        
    }
}

export {DeleteMoviesController}