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
var AddNoteComponent = (function () {
    function AddNoteComponent(_router) {
        this._router = _router;
    }
    AddNoteComponent.prototype.onSubmit = function () {
        console.log('add note submit action');
    };
    AddNoteComponent.prototype.ngOnInit = function () {
        var dtExpire = new Date();
        dtExpire.addDays(2);
        this.newNote = {
            title: '',
            body: '',
            expireDate: dtExpire,
            color: ''
        };
    };
    AddNoteComponent = __decorate([
        core_1.Component({
            selector: 'add-note-component',
            templateUrl: './app/components/main/add-note.component.html',
            styles: ["\n        label{\n            display: inline-block;\n            width: 250px;\n        }\n        \n        input   {\n            width: 250px;\n        }\n        \n        .ng-invalid{\n            border: 1px solid red;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AddNoteComponent);
    return AddNoteComponent;
}());
exports.AddNoteComponent = AddNoteComponent;
//# sourceMappingURL=add-note.component.js.map