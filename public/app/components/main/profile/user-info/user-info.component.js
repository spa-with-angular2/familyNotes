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
var user_model_1 = require("../../../../models/user.model");
var user_data_service_1 = require("../../../../services/user/user-data.service");
var countries_enum_1 = require("../../../../enumerations/countries.enum");
var enum_utilities_1 = require("../../../../enumerations/utilities/enum.utilities");
var user_auth_service_1 = require("../../../../services/user/user-auth.service");
var noProfilePictureUrl = '/app/assets/images/default-user.jpg';
var UserInfoComponent = (function () {
    function UserInfoComponent(userDataService, router, userAuthService) {
        this.userDataService = userDataService;
        this.router = router;
        this.userAuthService = userAuthService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.userAuthService.authenticated;
        this.isInEditMode = false;
        this.countries = enum_utilities_1.EnumUtils.values(countries_enum_1.CountriesEnum);
        this.profilePicture = noProfilePictureUrl;
        console.log('is logged in user info-' + this.isLoggedIn);
    };
    UserInfoComponent.prototype.toggleEditMode = function () {
        if (this.isInEditMode) {
            this.isInEditMode = false;
        }
        else {
            this.isInEditMode = true;
        }
    };
    UserInfoComponent.prototype.changeGender = function (gender) {
        this.userdata.gender = gender;
    };
    UserInfoComponent.prototype.changeCountry = function (country) {
        this.userdata.country = country;
    };
    UserInfoComponent.prototype.onSubmit = function () {
        this.userdata.profilePictures[0] = this.profilePicture;
        this.updateUserInfo();
    };
    UserInfoComponent.prototype.updateUserInfo = function () {
        var _this = this;
        console.log(this.userdata);
        this.userDataService
            .updateUserData(this.userdata)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                var message = 'Error during updating user data failed! Change data and try again.';
                var heading = 'Oops!';
                //this.toastrService.error(message, heading);
                console.log(heading + message);
                console.log(response.error);
            }
            else {
                var dbUser = response.result;
                localStorage.setItem('user', JSON.stringify(dbUser));
                var message = 'You have updated user data successfully.';
                var heading = 'Day! ';
                //this.toastrService.success(message, heading);
                console.log(heading + message);
                //console.log(dbUser);
                _this.toggleEditMode();
                var that_1 = _this;
                setTimeout(function () {
                    that_1.router.navigate(['profile']);
                }, 2000);
            }
        }, function () {
            // const that = this;
            // setTimeout(function () {
            //     that.router.navigate(['home']);
            // }, 4000);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_model_1.User)
    ], UserInfoComponent.prototype, "userdata", void 0);
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'user-info',
            templateUrl: './app/components/main/profile/user-info/user-info.component.html',
            styleUrls: ['./app/components/main/profile/user-info/user-info.component.css']
        }), 
        __metadata('design:paramtypes', [user_data_service_1.UserDateService, router_1.Router, user_auth_service_1.UserAuthService])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=user-info.component.js.map