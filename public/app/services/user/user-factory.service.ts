import {Injectable} from '@angular/core';

import {User} from "../../models/user.model";

@Injectable()
export class UserFactoryService {

    constructor(){
    }

    public createUser(
        id: string,

        firstName: string,
        lastName: string,
        age: number,
        gender: string,
        country: string,

        email: string,
        profilePicture: string,

        username: string,
        passHash: string,
        role: string,
        fbId: string,
        fbToken: string
    ){
        var newUserToReturn: User;

        newUserToReturn = new User(
            firstName,
            lastName,
            age,
            gender,
            country,

            email,
            profilePicture,

            username,
            passHash,
            role,
            fbId,
            fbToken
        );

        return newUserToReturn;
    }
}
