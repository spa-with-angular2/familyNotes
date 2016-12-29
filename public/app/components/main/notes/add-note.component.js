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
var router_1 = require('@angular/router');
var note_service_1 = require('../../../services/note.service');
function addDays(date, days) {
    console.log('adding ' + days + ' days');
    console.log(date);
    date.setDate(date.getDate() + (days));
    console.log(date);
    return date;
}
var AddNoteComponent = (function () {
    function AddNoteComponent(_noteService, _router) {
        this._noteService = _noteService;
        this._router = _router;
    }
    AddNoteComponent.prototype.ngOnInit = function () {
        var dtExpire = new Date();
        dtExpire = addDays(dtExpire, 5);
        this.noteLikeObject = {
            title: '',
            body: '',
            expireDate: dtExpire,
            color: ''
        };
        this.showMoreOptions = false;
    };
    AddNoteComponent.prototype.onSubmit = function () {
        console.log('add note submit action');
        // TODO create new note with the note.service.create
        this.newNote = this._noteService.create(this.noteLikeObject);
        // TODO save the note in the database
        this._noteService.insert(this.newNote);
        // TODO redirect to see notes root
        //this._router.navigate([NotesRout]);
    };
    AddNoteComponent.prototype.toggleShowMoreOptions = function () {
        console.log('show more options click');
        if (this.showMoreOptions) {
            this.showMoreOptions = false;
        }
        else {
            this.showMoreOptions = true;
        }
    };
    AddNoteComponent = __decorate([
        core_1.Component({
            selector: 'add-note-component',
            templateUrl: './app/components/main/notes/add-note.component.html',
            providers: [note_service_1.NoteService],
            styles: ["\n        label{\n            display: inline-block;\n            width: 150px;\n        }\n        \n        input   {\n            width: 350px;\n        }\n        textarea   {\n            width: 350px;\n        }\n        \n        .ng-invalid{\n            border: 1px solid red;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService, router_1.Router])
    ], AddNoteComponent);
    return AddNoteComponent;
}());
exports.AddNoteComponent = AddNoteComponent;
//# sourceMappingURL=add-note.component.js.map