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
require('rxjs/add/operator/map');
var user_auth_service_1 = require("../../../services/user/user-auth.service");
var user_main_service_1 = require("../../../services/user/user-main.service");
var LoginComponent = (function () {
    function LoginComponent(userAuthService, userMainService, router) {
        this.userAuthService = userAuthService;
        this.userMainService = userMainService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.newLoginObject = {
            username: '',
            password: ''
        };
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.newLoginObject);
        this.loginUser();
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.userAuthService
            .login(this.newLoginObject)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            //let dbUser: any = (typeof (response) === 'string') ? JSON.parse(response) : response;
            if (response.error) {
                var message = 'Login failed! Please try again.';
                var heading = 'Oops!';
                //this.toastrService.success(message, heading);
                console.log(heading + message);
                console.log(response.error);
            }
            else {
                console.log('--------------------------');
                var dbUser = response.result;
                console.log(response);
                localStorage.setItem('user', JSON.stringify(dbUser));
                _this.userMainService.setIsUserLogged();
                var message = 'You have logged in successfully.';
                var heading = 'Bay! ';
                //this.toastrService.success(message, heading);
                console.log(heading + message);
                console.log(dbUser);
                var that_1 = _this;
                setTimeout(function () {
                    that_1.router.navigate(['home']);
                }, 2000);
            }
        }, function () {
            // const that = this;
            // setTimeout(function () {
            //     that.router.navigate(['home']);
            // }, 4000);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/components/main/login/login.component.html',
            providers: [user_auth_service_1.UserAuthService, user_main_service_1.UserMainService],
            styleUrls: ['./app/components/main/login/login-component.css'],
        }), 
        __metadata('design:paramtypes', [user_auth_service_1.UserAuthService, user_main_service_1.UserMainService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map