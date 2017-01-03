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
    ) {
        //this.subscription = this.userAuthService.subscribe(this, this.selectedNavItem);

        this.subscription = this.userAuthService.subscribe((newValue) => this.selectedNavItem(newValue));
    }

    item: boolean;
    subscription: any;
    // constructor(private navService:NavService) {
    //     this.subscription = this.navService.subscribe(this, this.selectedNavItem);
    // }
    selectedNavItem(changedValue: any) {
        console.log('item index changed!', changedValue);
        this.isLoggedIn = changedValue;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
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
        // Only check once even if component is
        // destroyed and constructed again

        // this.userAuthService
        //     .authenticatedChange
        //     .subscribe((isLogged: boolean) => this.isLoggedIn = isLogged);



        this.isLoggedIn = this.userAuthService.authenticated;
        console.log('isLoggedIn nav-'+this.isLoggedIn);
        console.log('item tested nav-'+this.item);
    }

    toggleLoginTest(): void{
        this.userAuthService.authenticated = !this.userAuthService.authenticated;

        //this.isLoggedIn = this.userAuthService.authenticated;

        console.log('isLoggedIn from userAuthService -' + this.isLoggedIn);
    }
}