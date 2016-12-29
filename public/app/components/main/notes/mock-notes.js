"use strict";
var note_states_enum_1 = require("../../../enumerations/note-states.enum");
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
        stateIndex: note_states_enum_1.NoteStatesEnum.Todo,
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
        stateIndex: note_states_enum_1.NoteStatesEnum.Todo,
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
        stateIndex: note_states_enum_1.NoteStatesEnum.Todo,
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
        stateIndex: note_states_enum_1.NoteStatesEnum.Todo,
        postedDate: new Date(),
        expireDate: new Date(),
        color: '',
        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    }
];
//# sourceMappingURL=mock-notes.js.map