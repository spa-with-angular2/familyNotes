import { Component } from '@angular/core';

import { User } from '../../models/user.model';
import { UserComponent } from '../users/user.component';

@Component ({
    selector: 'home',
    templateUrl: './app/components/main/home.component.html',
    styleUrls: ['./app/components/main/home-component-css.css']
})
export class HomeComponent{
    userCtrl: UserComponent;
    alex: User;

    constructor(){
        this.userCtrl = new UserComponent();

        this.alex = this.userCtrl.createUser();
        console.log(this.alex);
    }
}