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
var State;
(function (State) {
    State[State["Empty"] = 0] = "Empty";
    State[State["Todo"] = 1] = "Todo";
    State[State["Done"] = 2] = "Done";
    State[State["NotDone"] = 3] = "NotDone";
})(State || (State = {}));
// TODO extract function
function isNullOrUndefined(obj) {
    return typeof obj === "undefined" || obj === null;
}
function listEnum(enumClass) {
    var values = [];
    for (var key in enumClass) {
        values.push(key);
    }
    values.length = values.length / 2;
    return values;
}
function enumLength(enumClass) {
    var values = listEnum(enumClass);
    return values.length;
}
var Note = (function () {
    function Note() {
        this.notedata = {
            title: 'Note title',
            body: 'Note body text.',
            author: {
                _id: '123',
                username: 'anonymous',
                picture: ''
            },
            color: 'gray',
            status: {
                index: 0
            },
            areUnsavedChanges: false,
            isInEditMode: false,
            isDeleted: false
        };
        this.iconsPath = './app/assets/images/icons/';
        this.placeholderImage = this.iconsPath + 'browser-icon-main.png';
        this.noteState = State;
        this.status1 = true;
    }
    Note.prototype.getStatusImagePath = function () {
        var imageSrcToReturn = this.placeholderImage;
        var statusIndex = 0;
        if (!isNullOrUndefined(this.notedata.status.index)) {
            statusIndex = this.notedata.status.index;
        }
        if (statusIndex == this.noteState.Empty) {
            imageSrcToReturn = this.iconsPath + 'note-state-empty.png';
        }
        else if (statusIndex == this.noteState.Todo) {
            imageSrcToReturn = this.iconsPath + 'note-state-todo.png';
        }
        else if (statusIndex == this.noteState.Done) {
            imageSrcToReturn = this.iconsPath + 'note-state-done.png';
        }
        else if (statusIndex == this.noteState.NotDone) {
            imageSrcToReturn = this.iconsPath + 'note-state-not-done.png';
        }
        return imageSrcToReturn;
    };
    Note.prototype.toggleState = function () {
        console.log('status toggled');
        var statusIndexToReturn = this.notedata.status.index;
        var statusLen = enumLength(this.noteState);
        // TODO status to return out of range refactor magic numbers
        if (statusIndexToReturn < 0 || statusIndexToReturn >= statusLen) {
            throw new Error('Note status out of range!');
        }
        if (statusIndexToReturn == (statusLen - 1)) {
            statusIndexToReturn = 0;
        }
        else {
            statusIndexToReturn += 1;
        }
        console.log('index' + this.notedata.status.index);
        this.notedata.status.index = statusIndexToReturn;
        this.notedata.areUnsavedChanges = true;
    };
    Note.prototype.toggleEdit = function () {
        if (this.notedata.isInEditMode) {
            this.notedata.isInEditMode = false;
            console.log('note is not in edit mode');
        }
        else {
            this.notedata.isInEditMode = true;
            console.log('note is in edit mode!!');
        }
        this.notedata.areUnsavedChanges = true;
    };
    Note.prototype.toggleDelete = function () {
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
    Note.prototype.toggleColor = function () {
    };
    Note.prototype.save = function () {
        // TODO note save to database
        // TODO Reload new note data
        this.notedata.areUnsavedChanges = false;
        console.log('Note changes saved to database!');
        return undefined;
    };
    Note.prototype.delete = function () {
        return undefined;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Note.prototype, "notedata", void 0);
    Note = __decorate([
        core_1.Component({
            selector: 'single-note',
            templateUrl: './app/components/main/note.component.html',
            styles: ["\n        .status-image{\n            min-width: 16px;\n            max-width: 20px;\n            cursor: pointer;\n        }\n        .bg-lightgrey {\n            background-color: lightgrey;\n        }\n        .bg-orange {\n            background-color: orange;\n        }\n        .bg-green {\n            background-color: green;\n        }\n        .bg-red {\n            background-color: red;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Note);
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.component.js.map