
import mongoose, { Schema } from "mongoose";
import noteSchema from "../schemas/note.schema";

const NoteModel = mongoose.model('Note', noteSchema);
export default NoteModel;