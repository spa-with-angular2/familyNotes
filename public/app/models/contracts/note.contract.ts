import { User } from '../user.model';
import { Note} from '../note.model';
import { NoteStatesEnum } from '../../enumerations/note-states.enum';

export interface INote
{
    title: string;
    body: number;
    author: User;
    state: NoteStatesEnum;
    postedDate: Date;

    expireDate: Date;
    color: string;
}