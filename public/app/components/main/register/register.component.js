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
var countries_enum_1 = require('../../../enumerations/countries.enum');
var user_factory_service_1 = require('../../../services/user/user-factory.service');
var password_service_1 = require("../../../services/password.service");
var user_register_service_1 = require("../../../services/user/user-register.service");
var RegisterComponent = (function () {
    function RegisterComponent(userFactoryService, passwordService, userAuthService, router) {
        this.userFactoryService = userFactoryService;
        this.passwordService = passwordService;
        this.userAuthService = userAuthService;
        this.router = router;
        this.AgentStatus = countries_enum_1.CountriesEnum;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = false;
        var x = countries_enum_1.CountriesEnum;
        var options = Object.keys(countries_enum_1.CountriesEnum);
        this.options = options.slice(options.length / 2);
        this.newUserLikeObject = {
            firstName: 'Alexander',
            lastName: 'Toplijski',
            age: 12,
            gender: 'Male',
            country: 'Bg',
            email: 'email@email.com',
            profilePicture: '',
            families: [],
            username: 'alex',
            password: '123'
        };
        if (!this.isLoggedIn) {
        }
    };
    RegisterComponent.prototype.changeGender = function (gender) {
        this.newUserLikeObject.gender = gender;
    };
    RegisterComponent.prototype.parseValue = function (value) {
        this.myValue = countries_enum_1.CountriesEnum[value];
        this.isOffline = this.myValue == countries_enum_1.CountriesEnum.Bulgaria;
        this.newUserLikeObject.country = value;
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('password-' + this.newUserLikeObject.password);
        this.newUserLikeObject.password = this.passwordService.hashPassword(this.newUserLikeObject.password);
        console.log('-------------------------');
        // TODO create user
        this.newUser = this.makeNewUser();
        // TODO save to database
        this.userAuthService.register(this.newUser)
            .map(function (res) { return res.json(); })
            .subscribe(function (responseUser) {
            var method = 'success';
            var message = 'You have registered successfully.';
            var heading = 'Yay!';
            console.log(message);
            console.log(responseUser);
            //const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
            //    .createToastrNotificationOptions(method, message, heading);
            //this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function (err) {
            //this.isLoading = false;
            var method = 'error';
            var message = 'Email or username already in use.';
            var heading = 'Oops!';
            console.log(err);
            // const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
            //     .createToastrNotificationOptions(method, message, heading);
            //
            // this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        }, function () {
            var that = _this;
            setTimeout(function () {
                that.router.navigate(['login']);
            }, 1000);
        });
    };
    RegisterComponent.prototype.makeNewUser = function () {
        var newUserToReturn;
        newUserToReturn = this.userFactoryService.createUser('', this.newUserLikeObject.firstName, this.newUserLikeObject.lastName, this.newUserLikeObject.age, this.newUserLikeObject.gender, this.newUserLikeObject.country, this.newUserLikeObject.email, this.newUserLikeObject.profilePicture, this.newUserLikeObject.username, this.newUserLikeObject.password, '', '', '');
        return newUserToReturn;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: './app/components/main/register/register.component.html',
            providers: [user_factory_service_1.UserFactoryService, password_service_1.PasswordService, user_register_service_1.UserAuthService],
            styleUrls: ['./app/components/header/nav-component.css', './app/components/main/register/register-component.css', './app/assets/css/hover.css'],
        }), 
        __metadata('design:paramtypes', [user_factory_service_1.UserFactoryService, password_service_1.PasswordService, user_register_service_1.UserAuthService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map