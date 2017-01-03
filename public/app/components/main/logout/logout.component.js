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
var user_main_service_1 = require("../../../services/user/user-main.service");
var user_auth_service_1 = require("../../../services/user/user-auth.service");
var LogoutComponent = (function () {
    function LogoutComponent(userMainService, router, userAuthService) {
        this.userMainService = userMainService;
        this.router = router;
        this.userAuthService = userAuthService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAuthService.isLoggedIn()
            .then(function (isLogged) {
            _this.isLoggedIn = isLogged;
            _this.logout();
        }).catch(function (isNotLogged) {
            _this.isLoggedIn = isNotLogged;
            _this.redirectToLogin();
        });
    };
    LogoutComponent.prototype.logout = function () {
        this.userAuthService.logout();
        this.userAuthService.authenticated = false;
        var that = this;
        setTimeout(function () {
            that.router.navigate(['home']);
        }, 5000);
    };
    LogoutComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['login']);
    };
    LogoutComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"container\">\n        \n            <div class=\"boo-wrapper\" *ngIf=\"this.isLoggedIn\">\n                <h1>You logout is successful!</h1>\n                <p>\n                    We are redirecting you to the home page!\n                    <br /> Hope to see you soon.\n                </p>\n            </div>\n            \n            <div class=\"boo-wrapper\" *ngIf=\"!this.isLoggedIn\">\n                <h1>You have to login first.</h1>\n                <p>\n                    We are redirecting you to the login page!                    \n                </p>\n            </div>\n        </div>\n    ",
            styles: ["\n        .container {\n            font-family: 'Varela Round', sans-serif;\n            color: $booFaceColor;\n            position: relative;\n            height: 100vh;\n            text-align: center;\n            font-size: $jaggedDistance / 2;\n            h1 {\n                font-size: $jaggedDistance;\n                margin-top: $jaggedDistance;\n            }\n        }\n        .boo-wrapper {\n            width: 100%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            padding-top: $jaggedDistance * 2;\n            padding-bottom: $jaggedDistance * 2;"]
        }), 
        __metadata('design:paramtypes', [user_main_service_1.UserMainService, router_1.Router, user_auth_service_1.UserAuthService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map