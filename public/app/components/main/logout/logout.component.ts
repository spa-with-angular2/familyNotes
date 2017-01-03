import {Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {UserMainService} from "../../../services/user/user-main.service";
import {UserAuthService} from "../../../services/user/user-auth.service";

@Component({
    template: `
        <div class="container">
        
            <div class="boo-wrapper" *ngIf="this.isLoggedIn">
                <h1>You logout is successful!</h1>
                <p>
                    We are redirecting you to the home page!
                    <br /> Hope to see you soon.
                </p>
            </div>
            
            <div class="boo-wrapper" *ngIf="!this.isLoggedIn">
                <h1>You have to login first.</h1>
                <p>
                    We are redirecting you to the login page!                    
                </p>
            </div>
        </div>
    `,
    styles: [`
        .container {
            font-family: 'Varela Round', sans-serif;
            color: $booFaceColor;
            position: relative;
            height: 100vh;
            text-align: center;
            font-size: $jaggedDistance / 2;
            h1 {
                font-size: $jaggedDistance;
                margin-top: $jaggedDistance;
            }
        }
        .boo-wrapper {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding-top: $jaggedDistance * 2;
            padding-bottom: $jaggedDistance * 2;`]
})
export class LogoutComponent{
    private isLoggedIn: boolean;

    constructor(
        private userMainService: UserMainService,
        private router: Router,
        private userAuthService: UserAuthService
    ) {}

    ngOnInit(): void{
        this.userAuthService.isLoggedIn()
            .then((isLogged) => {
                this.isLoggedIn = isLogged;
                this.logout();
            }).catch((isNotLogged) => {
                this.isLoggedIn = isNotLogged;
                this.redirectToLogin();
        });
    }

    public logout() {
        this.userAuthService.logout();
        this.userAuthService.authenticated = false;

        const that = this;
        setTimeout(function () {
            that.router.navigate(['home']);
        }, 5000);
    }

    public redirectToLogin(): void {
        this.router.navigate(['login']);
    }
}