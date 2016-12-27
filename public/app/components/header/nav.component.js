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
var notes_component_1 = require('../main/notes.component');
var NavComponent = (function () {
    function NavComponent(notesComponent) {
        this.notes = notesComponent;
        //this.addNoteFn = notesComponent.addNote;
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            templateUrl: './app/components/header/nav.component.html',
            styleUrls: ['./app/components/header/nav-component.css', './app/assets/css/hover.css'],
            providers: [notes_component_1.NotesComponent]
        }), 
        __metadata('design:paramtypes', [notes_component_1.NotesComponent])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map