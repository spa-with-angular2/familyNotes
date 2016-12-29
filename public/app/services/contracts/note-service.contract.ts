import {Note} from "../../models/note.model";

export interface NoteServiceInterface {

    create(noteLikeObject: any): Note;

    insert(note: Note): Note;

    update(note: Note): Note;

    delete(note: Note): Note;
}