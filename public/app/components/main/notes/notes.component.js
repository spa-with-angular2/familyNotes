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
var notes_service_1 = require("../../../services/notes.service");
var NotesComponent = (function () {
    function NotesComponent(notesService) {
        this.notesService = notesService;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    NotesComponent.prototype.getNotes = function () {
        var _this = this;
        this.notesService.getNotes()
            .then(function (notes) {
            _this.notes = notes;
        });
    };
    NotesComponent = __decorate([
        core_1.Component({
            selector: 'notes-container',
            templateUrl: './app/components/main/notes/notes.component.html',
            providers: [notes_service_1.NotesService],
            styles: [""]
        }), 
        __metadata('design:paramtypes', [notes_service_1.NotesService])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map