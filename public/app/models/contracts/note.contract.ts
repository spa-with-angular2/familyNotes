import { User } from '../user.model';
import { NoteStatesEnum } from '../../enumerations/note-states.enum';

export interface NoteInterface
{
    title: string;
    body: string;
    author: User;
    state: {
        index: number,
        name: string
    };
    postedDate: Date;

    expireDate: Date;
    color: string;
}