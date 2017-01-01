import { Component ,Injectable, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from "rxjs";
// Import RxJx required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from "../../models/user.model";
import {HttpOptionsService} from "../http-options.service";

@Component(){
    providers: [Http, HttpOptionsService]
}
@Injectable()
export class UserAuthService{
    public static BASE_DOMAIN_URL: string = 'http://localhost:3003/api/';
    public static REGISTER_USER_URL: string = UserAuthService.BASE_DOMAIN_URL + 'auth/register';
    public static LOGIN_USER_URL: string = UserAuthService.BASE_DOMAIN_URL + 'auth/login';
    public static LOGOUT_USER_URL: string = UserAuthService.BASE_DOMAIN_URL + 'auth/logout';
    public static VERIFY_LOGIN_URL: string = UserAuthService.BASE_DOMAIN_URL + 'auth/verify';

    private headerOptions: {};

    constructor(
        private http: Http,
        private httpOptionsService: HttpOptionsService
    ){}

    ngOnInit(): void {
        this.headerOptions = { 'Content-Type': 'application/json' };
    }

    register(user: User): Observable<Response> {
        var respToReturn: Observable<Response>;
        var requestOptions: RequestOptions = this.httpOptionsService.getRequestOptions(true);

        console.log('user sent for register');
        console.log(JSON.stringify(user));
        respToReturn = this.http.post(UserAuthService.REGISTER_USER_URL, JSON.stringify(user), requestOptions);

        return respToReturn;
    }

    login(loginObject: Object): Observable<Response> {
        var respToReturn: Observable<Response>;
        var requestOptions: RequestOptions = this.httpOptionsService.getRequestOptions(true);

        respToReturn = this.http.post(UserAuthService.LOGIN_USER_URL, JSON.stringify(loginObject), requestOptions);

        return respToReturn;
    }

    logout(): void{
        localStorage.clear();
    }

    isLoggedIn(): Observable<boolean> | boolean {
        let userDataString: string = localStorage.getItem('user');
        if (!userDataString) {
            return false;
        }

        let token: string = JSON.parse(userDataString).result.token;
        let requestOptions = this.httpOptionsService.getRequestOptions(true, token);

        return this.http.post(UserAuthService.VERIFY_LOGIN_URL, '', requestOptions)
            .map((response: Response) => {
                let result = JSON.parse(response.text());
                if (result.success) {
                    return true;
                }

                return false;
            });
    }
}
