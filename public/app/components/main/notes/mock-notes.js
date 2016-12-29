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
        body: 'Go to the bank and take the coins for Toni and Veronic',
        author: someUser,
        state: {
            index: note_states_enum_1.NoteStatesEnum.Todo,
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
        },
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
        state: {
            index: note_states_enum_1.NoteStatesEnum.Todo,
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
        },
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
        state: {
            index: note_states_enum_1.NoteStatesEnum.Todo,
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
        },
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
        state: {
            index: note_states_enum_1.NoteStatesEnum.Todo,
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
        },
        postedDate: new Date(),
        expireDate: new Date(),
        color: '',
        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    }
];
//# sourceMappingURL=mock-notes.js.map