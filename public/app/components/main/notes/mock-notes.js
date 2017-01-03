"use strict";
var note_states_enum_1 = require("../../../enumerations/note-states.enum");
var enum_utilities_1 = require("../../../enumerations/utilities/enum.utilities");
var someUser = {
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
exports.NOTES = [
    {
        id: '',
        title: 'Bank',
        body: "\n            - go to the bank and withdraw some money\n\n            - transfer some to the Sister\n\n            ",
        author: someUser,
        state: {
            index: note_states_enum_1.NoteStatesEnum.Todo,
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
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
            index: note_states_enum_1.NoteStatesEnum.Todo,
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
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
            index: note_states_enum_1.NoteStatesEnum.Todo,
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
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
            index: note_states_enum_1.NoteStatesEnum.Todo,
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
        },
        postedDate: new Date(),
        expireDate: undefined,
        color: '',
        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    }
];
//# sourceMappingURL=mock-notes.js.map