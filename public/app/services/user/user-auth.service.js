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
// import {Observable} from 'rxjs';
var Rx_1 = require('rxjs/Rx');
// Import RxJx required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/mergeMap');
var http_options_service_1 = require("../http-options.service");
{
    providers: [http_options_service_1.HttpOptionsService];
}
var UserAuthService = (function () {
    function UserAuthService(http, httpOptionsService) {
        this.http = http;
        this.httpOptionsService = httpOptionsService;
        this.authenticatedChange = new Rx_1.Subject();
        this._authenticated = false;
    }
    Object.defineProperty(UserAuthService.prototype, "authenticated", {
        get: function () {
            return this._authenticated;
        },
        set: function (authenticated) {
            // Plugin some processing here
            this._authenticated = authenticated;
            this.authenticatedChange.next(this._authenticated);
        },
        enumerable: true,
        configurable: true
    });
    UserAuthService.prototype.emit = function (authenticated) {
        this.authenticatedChange.next(authenticated);
    };
    UserAuthService.prototype.subscribe = function (callback) {
        // set 'this' to component when callback is called
        // return this.authenticatedChange.subscribe(data => {
        //     callback(component, data);
        // });
        return this.authenticatedChange.subscribe(callback);
    };
    UserAuthService.prototype.ngOnInit = function () {
        this.headerOptions = { 'Content-Type': 'application/json' };
        //this.authenticatedChange = new Subject();
    };
    UserAuthService.prototype.isLoggedInBoolean = function () {
        var _this = this;
        this.isLoggedIn()
            .then(function (isLogged) {
            _this.authenticated = true;
            return true;
        }).catch(function (isNotLogged) {
            _this.authenticated = true;
            return false;
        });
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
        //localStorage.clear();
        localStorage.removeItem('user');
        //this.isLoggedIn();
    };
    UserAuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.localLoginExists()
                .then(function (exist) {
                return _this.getRemoteToken();
            })
                .then(function (remoteToken) {
                var localToken = _this.getLocalToken();
                //console.log('remote token-' + remoteToken);
                //console.log('local token-' + localToken);
                return _this.compareLocalAndRemoteTokens(localToken, remoteToken);
            })
                .then(function (areSame) {
                _this.authenticated = true;
                return resolve(true);
            })
                .catch(function () {
                _this.authenticated = false;
                return reject(false);
            });
        });
    };
    UserAuthService.prototype.verifyRemoteLogin = function () {
        var respToReturn;
        var userDataStringLocal = localStorage.getItem('user');
        var token = JSON.parse(userDataStringLocal).token;
        var requestOptions = this.httpOptionsService.getRequestOptions(true, token);
        respToReturn = this.http.post(UserAuthService.VERIFY_LOGIN_URL, '', requestOptions);
        return respToReturn;
    };
    UserAuthService.prototype.localLoginExists = function () {
        return new Promise(function (resolve, reject) {
            var userDataString = localStorage.getItem('user');
            if (!userDataString) {
                return reject(false);
            }
            return resolve(true);
        });
    };
    UserAuthService.prototype.getRemoteToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.verifyRemoteLogin()
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                var remoteToken = response.result.token;
                if (!remoteToken) {
                    return reject(false);
                }
                return resolve(remoteToken);
            });
        });
    };
    UserAuthService.prototype.getLocalToken = function () {
        var userDataStringLocal = localStorage.getItem('user');
        var localToken = JSON.parse(userDataStringLocal).token;
        return localToken;
    };
    UserAuthService.prototype.compareLocalAndRemoteTokens = function (localToken, remoteToken) {
        return new Promise(function (resolve, reject) {
            var areSame = localToken === remoteToken;
            if (!areSame) {
                return reject(false);
            }
            return resolve(true);
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