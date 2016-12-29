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
(function (ColorsEnum) {
    ColorsEnum[ColorsEnum["Gray"] = 1] = "Gray";
    ColorsEnum[ColorsEnum["Green"] = 2] = "Green";
    ColorsEnum[ColorsEnum["Red"] = 3] = "Red";
})(exports.ColorsEnum || (exports.ColorsEnum = {}));
var ColorsEnum = exports.ColorsEnum;
var ColorsEnumUnusedClass = (function () {
    function ColorsEnumUnusedClass() {
    }
    ColorsEnumUnusedClass = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ColorsEnumUnusedClass);
    return ColorsEnumUnusedClass;
}());
exports.ColorsEnumUnusedClass = ColorsEnumUnusedClass;
//# sourceMappingURL=colors.enum.js.map