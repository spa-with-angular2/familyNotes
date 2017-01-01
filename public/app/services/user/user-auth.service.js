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
var http_options_service_1 = require("../http-options.service");
{
    providers: [http_1.Http, http_options_service_1.HttpOptionsService];
}
var UserAuthService = (function () {
    function UserAuthService(http, httpOptionsService) {
        this.http = http;
        this.httpOptionsService = httpOptionsService;
    }
    UserAuthService.prototype.ngOnInit = function () {
        this.headerOptions = { 'Content-Type': 'application/json' };
    };
    UserAuthService.prototype.register = function (user) {
        var respToReturn;
        var requestOptions = this.httpOptionsService.getRequestOptions(true);
        console.log('user sent for register');
        console.log(JSON.stringify(user));
        respToReturn = this.http.post(UserAuthService.REGISTER_USER_URL, JSON.stringify(user), requestOptions);
        return respToReturn;
    };
    UserAuthService.prototype.login = function (loginObject) {
        var respToReturn;
        var requestOptions = this.httpOptionsService.getRequestOptions(true);
        respToReturn = this.http.post(UserAuthService.LOGIN_USER_URL, JSON.stringify(loginObject), requestOptions);
        return respToReturn;
    };
    UserAuthService.prototype.logout = function () {
        localStorage.clear();
    };
    UserAuthService.prototype.isLoggedIn = function () {
        var userDataString = localStorage.getItem('user');
        if (!userDataString) {
            return false;
        }
        var token = JSON.parse(userDataString).result.token;
        var requestOptions = this.httpOptionsService.getRequestOptions(true, token);
        return this.http.post(UserAuthService.VERIFY_LOGIN_URL, '', requestOptions)
            .map(function (response) {
            var result = JSON.parse(response.text());
            if (result.success) {
                return true;
            }
            return false;
        });
    };
    UserAuthService.BASE_DOMAIN_URL = 'http://localhost:3003/api/';
    UserAuthService.REGISTER_USER_URL = UserAuthService.BASE_DOMAIN_URL + 'auth/register';
    UserAuthService.LOGIN_USER_URL = UserAuthService.BASE_DOMAIN_URL + 'auth/login';
    UserAuthService.LOGOUT_USER_URL = UserAuthService.BASE_DOMAIN_URL + 'auth/logout';
    UserAuthService.VERIFY_LOGIN_URL = UserAuthService.BASE_DOMAIN_URL + 'auth/verify';
    UserAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_options_service_1.HttpOptionsService])
    ], UserAuthService);
    return UserAuthService;
}());
exports.UserAuthService = UserAuthService;
//# sourceMappingURL=user-auth.service.js.map