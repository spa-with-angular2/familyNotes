import { NoteInterface } from './contracts/note.contract';
import { NoteStatesEnum } from '../enumerations/note-states.enum';
import { User } from './user.model';

export class Note implements NoteInterface{
    private id: string;

    public title: string;
    public body: number;
    public author: User;
    public state: NoteStatesEnum;
    public postedDate: Date;

    public expireDate: Date;
    public color: string;

    private areUnsavedChanges: boolean;
    private isInEditMode: boolean;
    private isDeleted: boolean;

    constructor(
        // _id: string,

        _title: string,
        _body: number,
        _author: User,
        _state: NoteStatesEnum,
        // _postedDate: Date,

        // _expireDate: Date,
        // _color: string,

        _areUnsavedChanges: boolean,
        _isInEditMode: boolean,
        _isDeleted: boolean
    ){
            // this.id = _id,

            this.title = _title;
            this.body = _body;
            this.author = _author;
            this.state = NoteStatesEnum.Empty;
            this.postedDate = new Date();

            // this.expireDate: Date,
            // this.color: string,

            this.areUnsavedChanges = false;
            this.isInEditMode = false;
            this.isDeleted = false;
    }
}