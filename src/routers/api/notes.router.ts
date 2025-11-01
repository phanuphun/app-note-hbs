import { Router } from "express";
import noteController from "../../controllers/notes.controller";

const noteRouter = Router();

noteRouter.get('/', noteController.getAllNotes);
noteRouter.post('/', noteController.createNote);

export default noteRouter;