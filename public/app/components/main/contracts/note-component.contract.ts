import { Note} from '../../../models/note.model';

export interface NoteComponentInterface
{
    toggleState(): void;

    toggleEdit(): void;

    toggleDelete(): void;

    toggleColor(): void;

    save(): Note;

    delete():Note;
}