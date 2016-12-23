"use strict";
// import { Component, Input } from '@angular/core';
var user_model_1 = require('../../models/user.model');
// @Component ({
//     selector: 'single-user',
//     templateUrl: `
//         <h1>User is here</h1>h1>
//     `,
//     styles: [`
//     `]
// })
var UserComponent = (function () {
    // @Input() userdata = {
    //     _id: '123456',
    //     firstName: 'Alexander',
    //     lastName: 'Toplijski',
    //     age: 36,
    //     gender: 'Male'
    // };
    function UserComponent() {
    }
    UserComponent.prototype.createUser = function () {
        var userToReturn;
        userToReturn = new user_model_1.User('123456', 'Alexander', 'Toplijski', 36, 'male');
        return userToReturn;
    };
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map