import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

import {UserAuthService} from '../services/user/user-auth.service';

@Injectable()
export class IsLoggedUserGuard implements CanActivate {

    constructor(private userAuthService: UserAuthService){
    }

    public canActivate() {
        return this.userAuthService.isLoggedIn();
    }
}