import { Request, Response} from 'express';
import { CreateMoviesSevice } from '../services/CreateMoviesService';

class CreateMoviesController {
    async handle(req: Request, res: Response){
        const { title, description, classification, launched_in } = req.body;
        const service = new CreateMoviesSevice();

        const result = await service.execute({
            title,
            description,
            classification,
            launched_in
        })


        return res.json(result)

    }
}



export {CreateMoviesController};