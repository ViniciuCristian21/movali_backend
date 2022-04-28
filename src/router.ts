import { Router } from "express";
import { CreateEvaluationController } from "./controllers/CreateEvaluationController";
import { CreateMoviesController } from "./controllers/CreateMoviesController";
import { DeleteMoviesController } from "./controllers/DeleteMoviesController";
import { GetEvaluationController } from "./controllers/GetEvaluationController";
import { GetMoviesController } from "./controllers/GetMoviesController";


const router = Router();


router.post("/new-movie", new CreateMoviesController().handle);
router.get("/movies", new GetMoviesController().handle);
router.delete("/movie_remove:id", new DeleteMoviesController().handle);


router.post("/new-evaluation", new CreateEvaluationController().handle);
router.get("/evaluations", new GetEvaluationController().handle);


export {router};