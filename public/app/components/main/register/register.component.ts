import {Component} from '@angular/core';

import {CountriesEnum} from '../../../enumerations/countries.enum'
import {User} from "../../../models/user.model";
import {UserFactoryService} from '../../../services/user/user-factory.service'


@Component({
    selector: 'register',
    templateUrl: './app/components/main/register/register.component.html',
    providers: [UserFactoryService],
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

    constructor(private userFactoryService: UserFactoryService){
    }

    ngOnInit() {
        this.isLoggedIn = false;

        var x = CountriesEnum;
        var options = Object.keys(CountriesEnum);
        this.options = options.slice(options.length / 2);

        this.newUserLikeObject = {
            firstName: '',
            lastName: '',
            age: 1,
            gender: '',
            country: '',

            email: '',
            profilePicture: '',
            families: [],

            username: '',
            password: ''
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
        console.log('-------------------------');
        // console.log(this.newUserLikeObject);

        // TODO create user
        this.newUser = this.makeNewUser();
        console.log(this.newUser);

        // TODO save to database

        // TODO redirect to login;
    }

    private makeNewUser(): User{
        var newUserToReturn: User;

        newUserToReturn = this.userFactoryService.createUser(
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

        return newUserToReturn;
    }

}
