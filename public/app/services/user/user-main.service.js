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
var Subject_1 = require('rxjs/Subject');
var http_options_service_1 = require('../http-options.service');
var mainProfilePictureIndex = 0;
var UserMainService = (function () {
    function UserMainService(http, httpOptionsService) {
        this.http = http;
        this.httpOptionsService = httpOptionsService;
        this.isLoggedSubject = new Subject_1.Subject();
        this.isUserObjectUpdatedSubject = new Subject_1.Subject();
        this.isUserObjectUpdated = false;
    }
    UserMainService.prototype.ngOnInit = function () {
    };
    UserMainService.prototype.setIsUserLogged = function () {
        this.isLogged = !!localStorage.getItem('user');
        this.isLoggedSubject.next(this.isLogged);
    };
    UserMainService.prototype.getIsUserLoggedIn = function () {
        return this.isLoggedSubject.asObservable();
    };
    UserMainService.prototype.setIsUserObjectUpdated = function () {
        this.isUserObjectUpdated = true;
        this.isUserObjectUpdatedSubject.next(this.isUserObjectUpdated);
        this.isUserObjectUpdated = false;
    };
    UserMainService.prototype.getIsUserObjectUpdated = function () {
        return this.isUserObjectUpdatedSubject.asObservable();
    };
    UserMainService.prototype.getMainProfilePictureUrl = function () {
        var mainProfilePictureUrlToReturn = '';
        //mainProfilePictureUrlToReturn = this.user.profilePictures[mainProfilePictureIndex];
        return mainProfilePictureUrlToReturn;
    };
    UserMainService.prototype.hasFamily = function () {
        // if(this.user.families == null || this.user.families == undefined){
        //     return false;
        // }
        // if(this.user.families.length == 0){
        //     return false;
        // }
        return true;
    };
    UserMainService.prototype.getFamilies = function () {
        var familiesToReturn;
        // TODO not finished method
        familiesToReturn = [];
        console.log('getFamilies call-' + familiesToReturn);
        return familiesToReturn;
    };
    UserMainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_options_service_1.HttpOptionsService])
    ], UserMainService);
    return UserMainService;
}());
exports.UserMainService = UserMainService;
//# sourceMappingURL=user-main.service.js.map