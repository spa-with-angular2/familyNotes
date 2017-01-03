import {Component} from '@angular/core';
import {Router} from "@angular/router";

import {CountriesEnum} from '../../../enumerations/countries.enum'
import {User} from "../../../models/user.model";
import {UserFactoryService} from '../../../services/user/user-factory.service'
import {PasswordService} from "../../../services/password.service";
import {UserAuthService} from "../../../services/user/user-auth.service";
import {ToastrService} from "toastr-ng2";


@Component({
    selector: 'register',
    templateUrl: './app/components/main/register/register.component.html',
    providers: [UserFactoryService, PasswordService],
    styleUrls: ['./app/components/header/nav-component.css' ,'./app/components/main/register/register-component.css' , './app/assets/css/hover.css'],
})
export class RegisterComponent {
    options: string[];
    myValue: CountriesEnum;
    AgentStatus: typeof CountriesEnum = CountriesEnum;
    isOffline: boolean ;

    public isLoggedIn: boolean;
    public newUser: User;
    public newUserLikeObject: any;

    constructor(
        private userFactoryService: UserFactoryService,
        private passwordService: PasswordService,
        private userAuthService: UserAuthService,
        private router: Router,
        private toastrService: ToastrService
    ){}

    ngOnInit(): void {
        this.isLoggedIn = false;

        var x = CountriesEnum;
        var options = Object.keys(CountriesEnum);
        this.options = options.slice(options.length / 2);

        this.newUserLikeObject = {
            firstName: 'Alexander',
            lastName: 'Toplijski',
            age: 12,
            gender: 'Male',
            country: 'Bg',

            email: 'email@email.com',
            profilePicture: '',
            families: [],

            username: 'alex',
            password: '123'
        };

        if(!this.isLoggedIn){

        }
    }

    changeGender(gender: string){
        this.newUserLikeObject.gender = gender;
    }

    parseValue(value: string) {
        this.myValue = CountriesEnum[value];
        this.isOffline = this.myValue == CountriesEnum.Bulgaria;
        this.newUserLikeObject.country = value;
    }

    public onSubmit(){
        // TODO make password encryption on client side
        // console.log('password-'+this.newUserLikeObject.password);
        // this.newUserLikeObject.password = this.passwordService.hashPassword(this.newUserLikeObject.password);

        console.log('-------------------------');
        this.makeNewUser();
        this.registerNewUser();
    }

    private makeNewUser(): void{
        //var newUserToReturn: User;

        this.newUser = this.userFactoryService.createUser(
            '',
            this.newUserLikeObject.firstName,
            this.newUserLikeObject.lastName,
            this.newUserLikeObject.age,
            this.newUserLikeObject.gender,
            this.newUserLikeObject.country,

            this.newUserLikeObject.email,
            this.newUserLikeObject.profilePicture,

            this.newUserLikeObject.username,
            this.newUserLikeObject.password,
            '',
            '',
            ''
        );

        //return newUserToReturn;
    }

    private registerNewUser(): void {
        this.userAuthService
            .register(this.newUser)
            .map((res) => res.json())
            .subscribe((responseUser: any) => {

                const message = 'You have registered successfully.';
                const heading = 'Yay! ';
                this.toastrService.success(message, heading);

                console.log(heading + message);
                console.log(responseUser);

            }, (err) => {
                //this.isLoading = false;

                const method = 'error';
                const message = 'Email or username already in use.';
                const heading = 'Oops!';

                console.log(heading + message);
                console.log(err);

            }, () => {
                const that = this;
                setTimeout(function () {
                    that.router.navigate(['login']);
                }, 4000);
            });
    }

}
