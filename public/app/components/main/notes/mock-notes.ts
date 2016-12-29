import {Note} from "../../../models/note.model";
import {User} from "../../../models/user.model";
import {NoteStatesEnum} from "../../../enumerations/note-states.enum";

var someUser: any = {
    id: '',

    firstName: 'Alexander',
    lastName: 'Toplijski',
    age: 33,
    gender: '',
    families: [''],

    email: 'email@email.com',
    profilePictures: [''],

    username: 'alex',
    passHash: '123',
    salt: '',
    role: '',
    fbId: '',
    fbToken: ''
};


export const NOTES: Note[] = [
    {
        id: '',
        title: 'Bank',
        body: 'Go to the bank and take the coins for Toni and Veronic',
        author: someUser,
        stateIndex: NoteStatesEnum.Todo,
        postedDate: new Date(),

        expireDate: new Date(),
        color: '',

        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    },
    {
        id: '',
        title: 'Appotheke',
        body: 'Go to the pharmacy and take Nelis pills',
        author: someUser,
        stateIndex: NoteStatesEnum.Todo,
        postedDate: new Date(),

        expireDate: new Date(),
        color: '',

        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    },
    {
        id: '',
        title: 'Maxi Cosi',
        body: 'Put the MaxiCosi for sale in OLX',
        author: someUser,
        stateIndex: NoteStatesEnum.Todo,
        postedDate: new Date(),

        expireDate: new Date(),
        color: '',

        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    },
    {
        id: '',
        title: 'Toni bd',
        body: 'Take wine and present',
        author: someUser,
        stateIndex: NoteStatesEnum.Todo,
        postedDate: new Date(),

        expireDate: new Date(),
        color: '',

        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    }
];