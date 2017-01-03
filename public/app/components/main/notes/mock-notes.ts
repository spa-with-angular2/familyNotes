import {Note} from "../../../models/note.model";
import {User} from "../../../models/user.model";
import {NoteStatesEnum} from "../../../enumerations/note-states.enum";
import {EnumUtils} from "../../../enumerations/utilities/enum.utilities";

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
        body: `
            - go to the bank and withdraw some money\n
            - transfer some to the Sister\n
            `,
        author: someUser,
        state: {
            index: NoteStatesEnum.Todo,
            name: EnumUtils.values(NoteStatesEnum.Todo).toString()
        },
        postedDate: new Date(),

        expireDate: undefined,
        color: '',

        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    },
    {
        id: '',
        title: 'Pharmacy',
        body: 'Go to the pharmacy but Mukosolvan, Ginkoprimmax, Ospamox',
        author: someUser,
        state: {
            index: NoteStatesEnum.Todo,
            name: EnumUtils.values(NoteStatesEnum.Todo).toString()
        },
        postedDate: new Date(),

        expireDate: undefined,
        color: '',

        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    },
    {
        id: '',
        title: 'Saturday Ski',
        body: 'make ski service for the ski, prepare the boots, put ski rack on the car',
        author: someUser,
        state: {
            index: NoteStatesEnum.Todo,
            name: EnumUtils.values(NoteStatesEnum.Todo).toString()
        },
        postedDate: new Date(),

        expireDate: undefined,
        color: '',

        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    },
    {
        id: '',
        title: 'Wife birthday',
        body: 'DO NOT forget, by present, buy flowers',
        author: someUser,
        state: {
            index: NoteStatesEnum.Todo,
            name: EnumUtils.values(NoteStatesEnum.Todo).toString()
        },
        postedDate: new Date(),

        expireDate: undefined,
        color: '',

        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    }
];