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
var countries_enum_1 = require('../../../enumerations/countries.enum');
var RegisterComponent = (function () {
    function RegisterComponent() {
        this.AgentStatus = countries_enum_1.CountriesEnum;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var x = countries_enum_1.CountriesEnum;
        var options = Object.keys(countries_enum_1.CountriesEnum);
        this.options = options.slice(options.length / 2);
    };
    RegisterComponent.prototype.parseValue = function (value) {
        this.myValue = countries_enum_1.CountriesEnum[value];
        this.isOffline = this.myValue == countries_enum_1.CountriesEnum.Bulgaria;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: './app/components/main/register/register.component.html',
            styleUrls: ['./app/components/main/register/register-component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map