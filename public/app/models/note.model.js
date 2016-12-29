"use strict";
var note_states_enum_1 = require('../enumerations/note-states.enum');
var enum_utilities_1 = require("../enumerations/utilities/enum.utilities");
var Note = (function () {
    function Note(_id, _title, _body, _author, 
        // _stateIndex: number,
        _postedDate, _expireDate, _color, _areUnsavedChanges, _isInEditMode, _isDeleted) {
        this.id = _id;
        this.title = _title;
        this.body = _body;
        this.author = _author;
        this.state = {
            index: Number(note_states_enum_1.NoteStatesEnum.Todo),
            name: enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum.Todo).toString()
        };
        this.postedDate = new Date();
        this.expireDate = _expireDate;
        this.color = _color;
        this.areUnsavedChanges = false;
        this.isInEditMode = false;
        this.isDeleted = false;
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.model.js.map