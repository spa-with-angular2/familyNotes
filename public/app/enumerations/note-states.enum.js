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
(function (NoteStatesEnum) {
    NoteStatesEnum[NoteStatesEnum["Empty"] = 0] = "Empty";
    NoteStatesEnum[NoteStatesEnum["Todo"] = 1] = "Todo";
    NoteStatesEnum[NoteStatesEnum["Done"] = 2] = "Done";
    NoteStatesEnum[NoteStatesEnum["NotDone"] = 3] = "NotDone";
})(exports.NoteStatesEnum || (exports.NoteStatesEnum = {}));
var NoteStatesEnum = exports.NoteStatesEnum;
var NoteStatesEnumUnusedClass = (function () {
    function NoteStatesEnumUnusedClass() {
    }
    NoteStatesEnumUnusedClass = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NoteStatesEnumUnusedClass);
    return NoteStatesEnumUnusedClass;
}());
exports.NoteStatesEnumUnusedClass = NoteStatesEnumUnusedClass;
//# sourceMappingURL=note-states.enum.js.map