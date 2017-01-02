import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {UserAuthService} from '../services/user/user-auth.service';

@Injectable()
export class IsLoggedUserGuard implements CanActivate {

    constructor(
        private router: Router,
        private userAuthService: UserAuthService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // this.userAuthService.isLoggedIn()
        //     .then((isLogged) => {
        //         console.log('isLoggedIn auth-guard-'+isLogged);
        //
        //         return true;
        //     }).catch((isNotLogged) => {
        //         console.log('isLoggedIn auth-guard-'+isNotLogged);
        //         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        //
        //         return false;
        // });

        if (localStorage.getItem('user')) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}