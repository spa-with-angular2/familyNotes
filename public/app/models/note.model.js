"use strict";
var note_states_enum_1 = require('../enumerations/note-states.enum');
var Note = (function () {
    function Note(
        // _id: string,
        _title, _body, _author, _state, 
        // _postedDate: Date,
        // _expireDate: Date,
        // _color: string,
        _areUnsavedChanges, _isInEditMode, _isDeleted) {
        // this.id = _id,
        this.title = _title;
        this.body = _body;
        this.author = _author;
        this.state = note_states_enum_1.NoteStatesEnum.Empty;
        this.postedDate = new Date();
        // this.expireDate: Date,
        // this.color: string,
        this.areUnsavedChanges = false;
        this.isInEditMode = false;
        this.isDeleted = false;
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.model.js.map