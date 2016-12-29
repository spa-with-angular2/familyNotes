"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var colors_enum_1 = require('../../../enumerations/colors.enum');
var note_states_enum_1 = require('../../../enumerations/note-states.enum');
var enum_utilities_1 = require('../../../enumerations/utilities/enum.utilities');
var note_model_1 = require("../../../models/note.model");
// TODO extract function
function isNullOrUndefined(obj) {
    return typeof obj === "undefined" || obj === null;
}
// TODO extract consts
var DEFAULT_COLOR_INDEX = colors_enum_1.ColorsEnum.Gray;
var NoteComponent = (function () {
    function NoteComponent() {
    }
    NoteComponent.prototype.ngOnInit = function () {
        this.iconsPath = './app/assets/images/icons/';
        this.placeholderImage = this.iconsPath + 'browser-icon-main.png';
        this.noteStatesEnum = note_states_enum_1.NoteStatesEnum;
        this.colorsEnum = colors_enum_1.ColorsEnum;
        this.noteColors = enum_utilities_1.EnumUtils.values(colors_enum_1.ColorsEnum);
        this.notedata.color = this.noteColors[DEFAULT_COLOR_INDEX];
        this.showMoreOptions = false;
    };
    NoteComponent.prototype.getStatusImagePath = function () {
        var imageUrlToReturn = this.placeholderImage;
        var currentStateIndex = note_states_enum_1.NoteStatesEnum.Empty;
        if (!isNullOrUndefined(this.notedata.stateIndex)) {
            currentStateIndex = this.notedata.stateIndex;
        }
        if (currentStateIndex === note_states_enum_1.NoteStatesEnum.Empty) {
            imageUrlToReturn = this.iconsPath + 'note-state-empty.png';
        }
        else if (currentStateIndex === note_states_enum_1.NoteStatesEnum.Todo) {
            imageUrlToReturn = this.iconsPath + 'note-state-todo.png';
        }
        else if (currentStateIndex === note_states_enum_1.NoteStatesEnum.Done) {
            imageUrlToReturn = this.iconsPath + 'note-state-done.png';
        }
        else if (currentStateIndex === note_states_enum_1.NoteStatesEnum.NotDone) {
            imageUrlToReturn = this.iconsPath + 'note-state-not-done.png';
        }
        return imageUrlToReturn;
    };
    NoteComponent.prototype.changeColor = function (color) {
        this.notedata.color = color;
        console.log('noteColor ' + this.notedata.color);
    };
    NoteComponent.prototype.toggleState = function () {
        console.log('state toggled');
        var currentStateIndex = this.notedata.stateIndex;
        var statesLen = enum_utilities_1.EnumUtils.values(this.noteStatesEnum).length;
        console.log('currentStateIndex ' + currentStateIndex);
        console.log('statesLen ' + statesLen);
        // TODO status to return out of range refactor magic numbers
        if (currentStateIndex < 0 || currentStateIndex >= statesLen) {
            throw new Error('Note status out of range!');
        }
        if (currentStateIndex == (statesLen - 1)) {
            currentStateIndex = 0;
        }
        else {
            currentStateIndex += 1;
        }
        // TODO remove commented logs
        // console.log('index'+this.notedata.status.index);
        this.notedata.stateIndex = currentStateIndex;
        this.notedata.areUnsavedChanges = true;
    };
    NoteComponent.prototype.toggleEdit = function () {
        if (this.notedata.isInEditMode) {
            this.notedata.isInEditMode = false;
            console.log('note is in view mode');
        }
        else {
            this.notedata.isInEditMode = true;
            console.log('note is in edit mode!!');
        }
        this.notedata.areUnsavedChanges = true;
    };
    NoteComponent.prototype.toggleDelete = function () {
        if (this.notedata.isDeleted) {
            this.notedata.isDeleted = false;
            console.log('delete cancel!');
        }
        else {
            this.notedata.isDeleted = true;
            console.log('note is deleted!');
        }
        this.notedata.areUnsavedChanges = true;
    };
    NoteComponent.prototype.toggleColor = function () {
    };
    NoteComponent.prototype.toggleShowMoreOptions = function () {
        if (this.showMoreOptions) {
            this.showMoreOptions = false;
        }
        else {
            this.showMoreOptions = true;
        }
    };
    NoteComponent.prototype.save = function () {
        // TODO note save to database
        // TODO Reload new note data
        this.notedata.areUnsavedChanges = false;
        console.log('Note changes saved to database!');
        return undefined;
    };
    NoteComponent.prototype.delete = function () {
        console.log('Note deleted flag set!');
        return undefined;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', note_model_1.Note)
    ], NoteComponent.prototype, "notedata", void 0);
    NoteComponent = __decorate([
        core_1.Component({
            selector: 'single-note',
            templateUrl: './app/components/main/notes/note.component.html',
            styles: ["\n        .status-image{\n            min-width: 16px;\n            max-width: 20px;\n            cursor: pointer;\n        }\n        .bg-lightgrey {\n            background-color: lightgrey;\n        }\n        .bg-orange {\n            background-color: orange;\n        }\n        .bg-green {\n            background-color: green;\n        }\n        .bg-red {\n            background-color: red;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], NoteComponent);
    return NoteComponent;
}());
exports.NoteComponent = NoteComponent;
//# sourceMappingURL=note.component.js.map