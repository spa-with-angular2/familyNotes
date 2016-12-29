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
// Imports
var core_1 = require('@angular/core');
// Import RxJx required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var note_model_1 = require("../models/note.model");
var note_states_enum_1 = require("../enumerations/note-states.enum");
var mock_notes_1 = require("../components/main/notes/mock-notes");
var NoteService = (function () {
    function NoteService() {
    }
    // Get all movies
    NoteService.prototype.create = function (noteLikeObject) {
        var newNote;
        // TODO temp variable to be replaced with the real logged in user
        var currentLoggedInUser;
        noteLikeObject['id'] = '';
        noteLikeObject['author'] = currentLoggedInUser;
        noteLikeObject['state'] = note_states_enum_1.NoteStatesEnum.Empty;
        noteLikeObject['postedDate'] = new Date();
        newNote = new note_model_1.Note(noteLikeObject.id, noteLikeObject.title, noteLikeObject.body, noteLikeObject.author, noteLikeObject.state, noteLikeObject.postedDate, noteLikeObject.expireDate, noteLikeObject.color, noteLikeObject.areUnsavedChanges, noteLikeObject.isInEditMode, noteLikeObject.isDeleted);
        // TODO remove logging
        //console.log(noteDataObject);
        return newNote;
    };
    NoteService.prototype.insert = function (note) {
        var dbNote;
        // TODO post to server at insert rout
        Promise.resolve(mock_notes_1.NOTES)
            .then(function (notes) {
            notes.push(note);
        });
        return dbNote;
    };
    NoteService.prototype.update = function (note) {
        var dbNote;
        // TODO post to server at update rout
        return dbNote;
    };
    NoteService.prototype.delete = function (note) {
        var dbNote;
        // TODO post to server at delete rout
        return dbNote;
    };
    NoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map