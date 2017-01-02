import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {UserMainService} from "../../services/user/user-main.service";
import {UserAuthService} from "../../services/user/user-auth.service";

@Component({
    selector: 'navigation',
    templateUrl: './app/components/header/nav.component.html',
    styleUrls: ['./app/components/header/nav-component.css', './app/assets/css/hover.css' ],
})

export class NavComponent{
    // notes: NotesComponent;
    private isLoggedIn: boolean;

    constructor(
        private userMainService: UserMainService,
        private router: Router,
        private userAuthService: UserAuthService
    ) {}

    ngOnInit(): void{
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
        if (this.userAuthService.authenticated.value === null)
            this.userAuthService.isLoggedInBoolean;

        this.isLoggedIn = this.userAuthService.authenticated.value;
        console.log('isLoggedIn nav-'+this.isLoggedIn);
}
}