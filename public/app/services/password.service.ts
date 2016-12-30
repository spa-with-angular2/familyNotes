import {Injectable} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class PasswordService {

    constructor(){
    }

    public hashPassword(passwordHumanString: string): string {
        var passwordHashedToReturn: string = '';

        passwordHashedToReturn =  Md5.hashAsciiStr(passwordHumanString).toString();

        return passwordHashedToReturn;
    }
}
