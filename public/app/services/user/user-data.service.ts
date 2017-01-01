import { Component ,Injectable, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from "rxjs";
// Import RxJx required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from "../../models/user.model";
import {HttpOptionsService} from "../http-options.service";

// @Component(){
//     providers: [HttpOptionsService]
// }
@Injectable()
export class UserDateService{
    private static BASE_DOMAIN_URL: string = 'http://localhost:3003/api/';
    public static SINGLE_USER_DATA_URL: string = UserDateService.BASE_DOMAIN_URL + 'users/';
    public static ALL_USERS_DATA_URL: string = UserDateService.BASE_DOMAIN_URL + 'users/all';

    private headerOptions: {};

    constructor(
        private http: Http//,
        // private httpOptionsService: HttpOptionsService
    ){}

    ngOnInit(): void {
        this.headerOptions = { 'Content-Type': 'application/json' };
    }

    public getUserData(userId: string): Observable<any> {
        var userDataToReturn: Observable<any>;

        userDataToReturn = this.http
            .get(UserDateService.SINGLE_USER_DATA_URL + userId)
            .map((response: Response) => response.json().result);

        return userDataToReturn;
    }

    public getAllUsersData(): Observable<any> {
        var allUsersDataToReturn: Observable<any>;

        allUsersDataToReturn = this.http
            .get(UserDateService.ALL_USERS_DATA_URL)
            .map((response: Response) => response.json());

        return allUsersDataToReturn;
    }
}
