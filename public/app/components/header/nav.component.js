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
        //this.subscription = this.userAuthService.subscribe(this, this.selectedNavItem);
        var _this = this;
        this.userMainService = userMainService;
        this.router = router;
        this.userAuthService = userAuthService;
        this.subscription = this.userAuthService.subscribe(function (newValue) { return _this.selectedNavItem(newValue); });
    }
    // constructor(private navService:NavService) {
    //     this.subscription = this.navService.subscribe(this, this.selectedNavItem);
    // }
    NavComponent.prototype.selectedNavItem = function (changedValue) {
        console.log('item index changed!', changedValue);
        this.isLoggedIn = changedValue;
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavComponent.prototype.ngOnInit = function () {
        // this.userAuthService.isLoggedIn()
        //     .then((isLogged) => {
        //         this.isLoggedIn = isLogged;
        //         console.log('isLoggedIn nav-'+this.isLoggedIn);
        //     }).catch((isNotLogged) => {
        //         this.isLoggedIn = isNotLogged;
        //         console.log('isLoggedIn nav-'+this.isLoggedIn);
        // });
        // Only check once even if component is
        // destroyed and constructed again
        // this.userAuthService
        //     .authenticatedChange
        //     .subscribe((isLogged: boolean) => this.isLoggedIn = isLogged);
        this.isLoggedIn = this.userAuthService.authenticated;
        console.log('isLoggedIn nav-' + this.isLoggedIn);
        console.log('item tested nav-' + this.item);
    };
    NavComponent.prototype.toggleLoginTest = function () {
        this.userAuthService.authenticated = !this.userAuthService.authenticated;
        //this.isLoggedIn = this.userAuthService.authenticated;
        console.log('isLoggedIn from userAuthService -' + this.isLoggedIn);
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