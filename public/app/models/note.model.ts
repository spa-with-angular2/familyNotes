import { NoteInterface } from './contracts/note.contract';
import { NoteStatesEnum } from '../enumerations/note-states.enum';
import { User } from './user.model';

export class Note implements NoteInterface{
    private id: string;

    public title: string;
    public body: string;
    public author: User;
    public stateIndex: number;
    public postedDate: Date;

    public expireDate: Date;
    public color: string;

    public areUnsavedChanges: boolean;
    public isInEditMode: boolean;
    public isDeleted: boolean;

    constructor(
        _id: string,

        _title: string,
        _body: string,
        _author: User,
        _stateIndex: number,
        _postedDate: Date,

        _expireDate: Date,
        _color: string,

        _areUnsavedChanges: boolean,
        _isInEditMode: boolean,
        _isDeleted: boolean
    ){
            this.id = _id;

            this.title = _title;
            this.body = _body;
            this.author = _author;
            this.stateIndex = NoteStatesEnum.Todo;
            this.postedDate = new Date();

            this.expireDate = _expireDate;
            this.color = _color;

            this.areUnsavedChanges = false;
            this.isInEditMode = false;
            this.isDeleted = false;
    }
}