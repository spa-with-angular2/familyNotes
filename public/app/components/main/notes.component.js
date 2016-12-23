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
var NotesComponent = (function () {
    function NotesComponent() {
        this.notes = [
            {
                title: 'Bank',
                body: 'Go to the bank and take the coins for Toni and Veronic',
                status: { index: 0 }
            },
            {
                title: 'Appotheke',
                body: 'Go to the pharmacy and take Nelis pills',
                status: { index: 1 }
            },
            {
                title: 'Maxi Cosi',
                body: 'Put the MaxiCosi for sale in OLX',
                status: { index: 2 }
            },
            {
                title: 'Toni bd',
                body: 'Tkae wine and present',
                status: { index: 3 }
            }
        ];
    }
    NotesComponent.prototype.addNote = function () {
        console.log('add a note from notesComponent');
        // used not to redirect page from the functions call
        return false;
    };
    NotesComponent = __decorate([
        core_1.Component({
            selector: 'notes-container',
            templateUrl: './app/components/main/notes.component.html',
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map