import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import {Observable} from "rxjs";
// Import RxJx required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from "../../models/user.model";

@Injectable()
export class UserMainService{
    public static REGISTER_USER_URL: string = '/api/users';
    public static LOGIN_USER_URL: string = '/api/users';
    public static LOGOUT_USER_URL: string = '/api/logout';

    private headerOptions: {};

    constructor(private http: Http){
    }

    ngOnInit(): void {
        this.headerOptions = { 'Content-Type': 'application/json' };
    }

    register(user: User): Observable<Response> {
        var respToReturn: Observable<Response>;
        var headers = new Headers(this.headerOptions);

        respToReturn = this.http.put(UserMainService.REGISTER_USER_URL, JSON.stringify(user), headers);

        return respToReturn;
    }

    login(user: User): Observable<Response> {
        var respToReturn: Observable<Response>;
        var headers = new Headers(this.headerOptions);

        respToReturn = this.http.post(UserMainService.LOGIN_USER_URL, JSON.stringify(user), headers);

        return respToReturn;
    }

    logout(): Observable<Response> {

        var respToReturn: Observable<Response>;

        respToReturn = this.http.get(UserMainService.LOGOUT_USER_URL);

        return respToReturn;
    }
}
