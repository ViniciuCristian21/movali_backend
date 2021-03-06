"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateEvaluationController_1 = require("./controllers/CreateEvaluationController");
const CreateMoviesController_1 = require("./controllers/CreateMoviesController");
const DeleteMoviesController_1 = require("./controllers/DeleteMoviesController");
const GetEvaluationController_1 = require("./controllers/GetEvaluationController");
const GetMoviesController_1 = require("./controllers/GetMoviesController");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/new-movie", new CreateMoviesController_1.CreateMoviesController().handle);
router.get("/movies", new GetMoviesController_1.GetMoviesController().handle);
router.delete("/movie_remove:id", new DeleteMoviesController_1.DeleteMoviesController().handle);
router.post("/new-evaluation", new CreateEvaluationController_1.CreateEvaluationController().handle);
router.get("/evaluations", new GetEvaluationController_1.GetEvaluationController().handle);
