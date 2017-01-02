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
var user_data_service_1 = require("../../../services/user/user-data.service");
var ProfileComponent = (function () {
    function ProfileComponent(userDataService) {
        this.userDataService = userDataService;
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
        this.localUser = JSON.parse(localStorage.getItem('user'));
        //console.log('localUsaerData');
        //console.log(this.localUser);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.localUser._id);
        this.userDataService
            .getUserData(this.localUser._id)
            .subscribe(function (resultDbUser) {
            _this.dbUser = resultDbUser;
            //console.log(resultDbUser);
        });
        this.user = this.localUser;
        this.profilePictureUrl = this.localUser.profilePictures[0];
        //this.user = this.dbUser;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            providers: [user_data_service_1.UserDateService],
            templateUrl: './app/components/main/profile/profile.component.html',
            styleUrls: ['./app/components/main/profile/profile-component.css'],
        }), 
        __metadata('design:paramtypes', [user_data_service_1.UserDateService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map