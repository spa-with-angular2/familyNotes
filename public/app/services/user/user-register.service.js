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
var http_1 = require('@angular/http');
// Import RxJx required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var UserMainService = (function () {
    function UserMainService(http) {
        this.http = http;
    }
    UserMainService.prototype.ngOnInit = function () {
        this.headerOptions = { 'Content-Type': 'application/json' };
    };
    UserMainService.prototype.register = function (user) {
        var respToReturn;
        var headers = new http_1.Headers(this.headerOptions);
        respToReturn = this.http.put(UserMainService.REGISTER_USER_URL, JSON.stringify(user), headers);
        return respToReturn;
    };
    UserMainService.prototype.login = function (user) {
        var respToReturn;
        var headers = new http_1.Headers(this.headerOptions);
        respToReturn = this.http.post(UserMainService.LOGIN_USER_URL, JSON.stringify(user), headers);
        return respToReturn;
    };
    UserMainService.prototype.logout = function () {
        var respToReturn;
        respToReturn = this.http.get(UserMainService.LOGOUT_USER_URL);
        return respToReturn;
    };
    UserMainService.REGISTER_USER_URL = '/api/users';
    UserMainService.LOGIN_USER_URL = '/api/users';
    UserMainService.LOGOUT_USER_URL = '/api/logout';
    UserMainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserMainService);
    return UserMainService;
}());
exports.UserMainService = UserMainService;
//# sourceMappingURL=user-register.service.js.map