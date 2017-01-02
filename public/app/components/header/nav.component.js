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
var user_main_service_1 = require("../../services/user/user-main.service");
var user_auth_service_1 = require("../../services/user/user-auth.service");
var NavComponent = (function () {
    function NavComponent(userMainService, router, userAuthService) {
        this.userMainService = userMainService;
        this.router = router;
        this.userAuthService = userAuthService;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAuthService.isLoggedIn()
            .then(function (isLogged) {
            _this.isLoggedIn = isLogged;
            console.log('isLoggedIn nav-' + _this.isLoggedIn);
        }).catch(function (isNotLogged) {
            _this.isLoggedIn = isNotLogged;
            console.log('isLoggedIn nav-' + _this.isLoggedIn);
        });
    };
    NavComponent.prototype.logout = function () {
        console.log('logout');
        this.userAuthService.logout();
        this.userMainService.setIsUserLogged();
        this.router.navigate(['home']);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            templateUrl: './app/components/header/nav.component.html',
            styleUrls: ['./app/components/header/nav-component.css', './app/assets/css/hover.css'],
        }), 
        __metadata('design:paramtypes', [user_main_service_1.UserMainService, router_1.Router, user_auth_service_1.UserAuthService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map