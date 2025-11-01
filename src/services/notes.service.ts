import NoteModel from "../models/note.model";

const getAllNotes = async (userId: string) => {
    const notes = await NoteModel.find({ userId: userId }).lean();
    return notes;
};

const noteService = {
    getAllNotes
};

export default noteService;