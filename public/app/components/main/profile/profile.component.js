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
var router_1 = require("@angular/router");
var user_data_service_1 = require("../../../services/user/user-data.service");
var user_auth_service_1 = require("../../../services/user/user-auth.service");
var ProfileComponent = (function () {
    function ProfileComponent(userDataService, userAuthService, router) {
        var _this = this;
        this.userDataService = userDataService;
        this.userAuthService = userAuthService;
        this.router = router;
        this.doneNotes = [
            { noteUrl: '#', name: "Clean House" },
            { noteUrl: '#', name: "Cook Dinner" },
            { noteUrl: '#', name: "Feed the cat" },
            { noteUrl: '#', name: "Brush teeth" }
        ];
        this.activeNotes = [
            { noteUrl: '#', name: "Finish homework" },
            { noteUrl: '#', name: "Study for exam" }
        ];
        this.isLoggedInSubscription = this.userAuthService.subscribe(function (newValue) { return _this.onLoggedInUpdated(newValue); });
    }
    ProfileComponent.prototype.onLoggedInUpdated = function (changedValue) {
        console.log('isLoggedIn value changed!', changedValue);
        this.isLoggedIn = changedValue;
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.isLoggedInSubscription.unsubscribe();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = this.userAuthService.authenticated;
        this.profilePictureUrl = '';
        this.firstName = '';
        console.log('isLoggedIn profile-' + this.isLoggedIn);
        if (this.isLoggedIn) {
            var userDataStringLocal = localStorage.getItem('user');
            var id = JSON.parse(userDataStringLocal)._id;
            //let localUser: User = localStorage.getItem('user');
            console.log('localUser _id-' + id);
            this.userDataService
                .getUserData(id)
                .subscribe(function (resultDbUser) {
                _this.user = resultDbUser.result;
                console.log(_this.user);
                _this.profilePictureUrl = _this.user.profilePictures[0];
                _this.firstName = _this.user.firstName;
            });
        }
        else {
            this.router.navigate(['home']);
        }
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: './app/components/main/profile/profile.component.html',
            styleUrls: ['./app/components/main/profile/profile-component.css'],
        }), 
        __metadata('design:paramtypes', [user_data_service_1.UserDateService, user_auth_service_1.UserAuthService, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map