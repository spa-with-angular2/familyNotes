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
var user_model_1 = require("../../../../models/user.model");
var user_data_service_1 = require("../../../../services/user/user-data.service");
var UserInfoComponent = (function () {
    function UserInfoComponent(userDataService) {
        this.userDataService = userDataService;
        this.isInEditMode = false;
    }
    UserInfoComponent.prototype.toggleEditMode = function () {
        if (this.isInEditMode) {
            this.isInEditMode = false;
        }
        else {
            this.isInEditMode = true;
        }
    };
    UserInfoComponent.prototype.updateAdditionalInfo = function () {
        var userId = JSON.parse(localStorage.getItem('user')).result._id;
        // this.userDataService
        //     .updateUserData(userId, this.form.value)
        //     .subscribe(user => {
        //         if (user) {
        //             localStorage.setItem('user', JSON.stringify(user));
        //             this.user = JSON.parse(localStorage.getItem('user')).result;
        //
        //             this.toggleEditMode();
        //             this._notificationService.create('Success!', 'Profile updated.', 'success');
        //         }
        //     }, console.log);
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
        __metadata('design:paramtypes', [user_data_service_1.UserDateService])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=user-info.component.js.map