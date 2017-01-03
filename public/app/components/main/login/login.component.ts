import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import 'rxjs/add/operator/map';

import {UserAuthService} from "../../../services/user/user-auth.service";
import {UserMainService} from "../../../services/user/user-main.service";

@Component ({
    selector: 'login',
    templateUrl: './app/components/main/login/login.component.html',
    styleUrls: ['./app/components/main/login/login-component.css'],
})
export class LoginComponent{

    private newLoginObject: any;

    constructor(
        private userAuthService: UserAuthService,
        private userMainService: UserMainService,
        private router: Router
    ){}

    ngOnInit(): void{

        this.newLoginObject = {
            username: '',
            password: ''
        };
    }

    onSubmit(): void{
        console.log(this.newLoginObject);
        this.loginUser();
    }

    private loginUser(): void{
        this.userAuthService
            .login(this.newLoginObject)
            .map((res) => res.json())
            .subscribe((response: any) => {
                //let dbUser: any = (typeof (response) === 'string') ? JSON.parse(response) : response;

                if (response.error) {
                    const message = 'Login failed! Please try again.';
                    const heading = 'Oops!';
                    //this.toastrService.success(message, heading);

                    console.log(heading + message);
                    console.log(response.error);
                } else {

                    console.log('--------------------------');
                    let dbUser: any = response.result;
                    console.log(response);
                    localStorage.setItem('user', JSON.stringify(dbUser));
                    this.userAuthService.authenticated = true;

                    const message = 'You have logged in successfully.';
                    const heading = 'Bay! ';
                    //this.toastrService.success(message, heading);

                    console.log(heading + message);
                    console.log(dbUser);

                    const that = this;
                    setTimeout(function () {
                        that.router.navigate(['home']);
                    }, 2000);
                }
            },() => {
                // const that = this;
                // setTimeout(function () {
                //     that.router.navigate(['home']);
                // }, 4000);
            });
    }

}
