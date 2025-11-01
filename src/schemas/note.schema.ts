
import { Schema } from "mongoose";

const noteSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true, collection: 'notes', strict: false });

export default noteSchema;