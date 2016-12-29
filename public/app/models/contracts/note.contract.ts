import { User } from '../user.model';
import { NoteStatesEnum } from '../../enumerations/note-states.enum';

export interface NoteInterface
{
    title: string;
    body: string;
    author: User;
    stateIndex: number;
    postedDate: Date;

    expireDate: Date;
    color: string;
}