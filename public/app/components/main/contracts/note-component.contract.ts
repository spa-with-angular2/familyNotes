import { Note} from '../../../models/note.model';

export interface NoteComponentInterface
{
    notedata: Note;
    iconsPath: string;
    placeholderImage: string;
    stateImageUrl: string;

    noteStatesEnum: any;
    noteStates: string[];
    colorsEnum:any;
    noteColors: string[];

    showMoreOptions: boolean;

    changeColor(color: string): void;

    changeNoteState(state: string): void;

    updateStateImageUrl(): string;

    toggleEdit(): void;

    toggleDelete(): void;


    save(): Note;

    delete():Note;
}