import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
// import {ROUTER_DIRECTIVES, CanActivate, OnActivate} from '@angular2/router';

import {User} from "../../../../models/user.model";
import {UserDateService} from "../../../../services/user/user-data.service";
import {CountriesEnum} from "../../../../enumerations/countries.enum";
import {EnumUtils} from "../../../../enumerations/utilities/enum.utilities";

import {UserAuthService} from "../../../../services/user/user-auth.service";
import {Observable} from "rxjs";

@Component({
    selector: 'user-info',
    templateUrl: './app/components/main/profile/user-info/user-info.component.html',
    styleUrls: ['./app/components/main/profile/user-info/user-info.component.css']
})
export class UserInfoComponent {
    @Input() public userdata: User;

    public isInEditMode: boolean;
    private countries: string[];
    private isLoggedIn: boolean;
    private ObsB: Observable<boolean>;

    constructor(
        private userDataService: UserDateService,
        private router: Router,
        private userAuthService: UserAuthService
    ){}

    ngOnInit(): void{
        this.isInEditMode = false;
        this.countries = EnumUtils.values(CountriesEnum);

        this.userAuthService.isLoggedIn()
            .then((isLogged) => {
                this.isLoggedIn = isLogged;
                console.log('isLoggedIn-'+this.isLoggedIn);
            }).catch((isNotLogged) => {
                this.isLoggedIn = isNotLogged;
                console.log('isLoggedIn-'+this.isLoggedIn);
            });
    }

    public toggleEditMode(): void {
        if(this.isInEditMode){
            this.isInEditMode = false;
        } else {
            this.isInEditMode = true;
        }
        console.log('is logged in final res-' + this.isLoggedIn);
    }

    changeGender(gender: string){
        this.userdata.gender = gender;
    }

    changeCountry(country: string) {
        this.userdata.country = country;
    }

    onSubmit(): void{
        this.updateUserInfo();
    }

    private updateUserInfo(): void {
        this.userDataService
            .updateUserData(this.userdata)
            .map((res) => res.json())
            .subscribe((response: any) => {
                if (response.error) {
                    const message = 'Error during updating user data failed! Change data and try again.';
                    const heading = 'Oops!';
                    //this.toastrService.error(message, heading);

                    console.log(heading + message);
                    console.log(response.error);
                } else {
                    let dbUser: User = response.result;
                    localStorage.setItem('user', JSON.stringify(dbUser));

                    const message = 'You have updated user data successfully.';
                    const heading = 'Day! ';
                    //this.toastrService.success(message, heading);

                    console.log(heading + message);
                    console.log(dbUser);

                    this.toggleEditMode();

                    const that = this;
                    setTimeout(function () {
                        that.router.navigate(['profile']);
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
