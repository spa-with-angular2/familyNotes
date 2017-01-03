import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";

import {User} from "../../../../models/user.model";
import {UserDateService} from "../../../../services/user/user-data.service";
import {CountriesEnum} from "../../../../enumerations/countries.enum";
import {EnumUtils} from "../../../../enumerations/utilities/enum.utilities";

import {UserAuthService} from "../../../../services/user/user-auth.service";

const noProfilePictureUrl: string = '/app/assets/images/default-user.jpg';

@Component({
    selector: 'user-info',
    templateUrl: './app/components/main/profile/user-info/user-info.component.html',
    styleUrls: ['./app/components/main/profile/user-info/user-info.component.css']
})
export class UserInfoComponent {
    @Input() userdata: User;

    private isLoggedIn: boolean;
    private isInEditMode: boolean;
    private countries: string[];
    private profilePicture: string;

    constructor(
        private userDataService: UserDateService,
        private router: Router,
        private userAuthService: UserAuthService
    ){}

    ngOnInit(): void{
        this.isLoggedIn = this.userAuthService.authenticated;
        this.isInEditMode = false;
        this.countries = EnumUtils.values(CountriesEnum);
        this.profilePicture = noProfilePictureUrl;

        console.log('is logged in user info-' + this.isLoggedIn);
    }

    public toggleEditMode(): void {
        if(this.isInEditMode){
            this.isInEditMode = false;
        } else {
            this.isInEditMode = true;
        }
    }

    changeGender(gender: string){
        this.userdata.gender = gender;
    }

    changeCountry(country: string) {
        this.userdata.country = country;
    }

    onSubmit(): void{
        this.userdata.profilePictures[0] = this.profilePicture;
        this.updateUserInfo();
    }

    private updateUserInfo(): void {
        console.log(this.userdata);
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
                    //console.log(dbUser);

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
