import {Component } from '@angular/core';
import {Router} from "@angular/router";

import {UserMainService} from "../../services/user/user-main.service";
import {UserAuthService} from "../../services/user/user-auth.service";

@Component({
    selector: 'navigation',
    templateUrl: './app/components/header/nav.component.html',
    styleUrls: ['./app/components/header/nav-component.css', './app/assets/css/hover.css' ],
})

export class NavComponent{
    public isLoggedIn: boolean;
    public isLoggedInSubscription: any;

    constructor(
        private userMainService: UserMainService,
        private router: Router,
        private userAuthService: UserAuthService
    ) {
        this.isLoggedInSubscription = this.userAuthService.subscribe((newValue) => this.onLoggedInUpdated(newValue));
    }

    onLoggedInUpdated(changedValue: any) {
        console.log('isLoggedIn value changed!', changedValue);
        this.isLoggedIn = changedValue;
    }
    ngOnDestroy() {
        this.isLoggedInSubscription.unsubscribe();
    }

    ngOnInit(): void{
        // this.userAuthService.isLoggedIn()
        //     .then((isLogged) => {
        //         this.isLoggedIn = isLogged;
        //         console.log('isLoggedIn nav-'+this.isLoggedIn);
        //     }).catch((isNotLogged) => {
        //         this.isLoggedIn = isNotLogged;
        //         console.log('isLoggedIn nav-'+this.isLoggedIn);
        // });

        this.isLoggedIn = this.userAuthService.authenticated;
        console.log('isLoggedIn nav-'+this.isLoggedIn);
    }

    toggleLoginTest(): void{
        this.userAuthService.authenticated = !this.userAuthService.authenticated;

        console.log('isLoggedIn from userAuthService -' + this.isLoggedIn);
    }
}