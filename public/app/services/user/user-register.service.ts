import { Component ,Injectable, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from "rxjs";
// Import RxJx required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from "../../models/user.model";
import {HttpOptionsService} from "../http-options.service";

@Component(){
    providers: [Http]
}
@Injectable()
export class UserAuthService{
    public static REGISTER_USER_URL: string = 'http://localhost:3003/api/auth/register';
    public static LOGIN_USER_URL: string = '/api/users';
    public static LOGOUT_USER_URL: string = '/api/logout';

    private headerOptions: {};

    constructor(private http: Http, private httpOptionsService: HttpOptionsService){
    }

    ngOnInit(): void {
        this.headerOptions = { 'Content-Type': 'application/json' };
    }

    // public registerUser(data: Object): Observable<any> {
    //     let userToCreate: string = JSON.stringify(data);
    //     let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
    //     return this._http
    //         .post(REGISTER_URL, userToCreate, options)
    //         .map((res: Response) => res.json());
    // }

    register(user: User): Observable<Response> {
        var respToReturn: Observable<Response>;
        var requestOptions: RequestOptions = this.httpOptionsService.getRequestOptions(true);

        console.log('user sent for register');
        console.log(JSON.stringify(user));
        respToReturn = this.http.post(UserAuthService.REGISTER_USER_URL, JSON.stringify(user), requestOptions);

        return respToReturn;
    }

    login(user: User): Observable<Response> {
        var respToReturn: Observable<Response>;
        var headers = new Headers(this.headerOptions);

        respToReturn = this.http.post(UserAuthService.LOGIN_USER_URL, JSON.stringify(user), headers);

        return respToReturn;
    }

    logout(): Observable<Response> {

        var respToReturn: Observable<Response>;

        respToReturn = this.http.get(UserAuthService.LOGOUT_USER_URL);

        return respToReturn;
    }
}
