// import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

// @Component ({
//     selector: 'single-user',
//     templateUrl: `
//         <h1>User is here</h1>h1>
//     `,
//     styles: [`
//     `]
// })
export class UserComponent{
    // @Input() userdata = {
    //     _id: '123456',
    //     firstName: 'Alexander',
    //     lastName: 'Toplijski',
    //     age: 36,
    //     gender: 'Male'
    // };

    constructor(){ }

    public  createUser(): User{
        var userToReturn: User;

        userToReturn = new User('123456', 'Alexander', 'Toplijski', 36, 'male');

        return userToReturn
    }
}