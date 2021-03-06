import {Component ,Injectable, OnInit, EventEmitter } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

// import {Observable} from 'rxjs';
import {Observable, Observer, Subject} from 'rxjs/Rx'
// Import RxJx required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {User} from "../../models/user.model";
import {HttpOptionsService} from "../http-options.service";

@Component(){
    providers: [HttpOptionsService]
}
@Injectable()
export class UserAuthService{
    public static BASE_DOMAIN_URL: string = 'http://localhost:3003/api/';
    public static REGISTER_USER_URL: string = UserAuthService.BASE_DOMAIN_URL + 'auth/register';
    public static LOGIN_USER_URL: string = UserAuthService.BASE_DOMAIN_URL + 'auth/login';
    public static LOGOUT_USER_URL: string = UserAuthService.BASE_DOMAIN_URL + 'auth/logout';
    public static VERIFY_LOGIN_URL: string = UserAuthService.BASE_DOMAIN_URL + 'auth/verify';

    public authenticatedChange: Subject<boolean> = new Subject();

    private _authenticated: boolean = false;
    get authenticated(): boolean {
        return this._authenticated ;
    }
    set authenticated (authenticated: boolean) {
        // Plugin some processing here
        this._authenticated = authenticated;
        this.authenticatedChange.next(this._authenticated);

    }
    emit(authenticated) {
        this.authenticatedChange.next(authenticated);
    }
    subscribe(callback) {
        // set 'this' to component when callback is called
        // return this.authenticatedChange.subscribe(data => {
        //     callback(component, data);
        // });
        return this.authenticatedChange.subscribe(callback);
    }

    private headerOptions: {};

    constructor(
        private http: Http,
        private httpOptionsService: HttpOptionsService
    ){}

    ngOnInit(): void {
        this.headerOptions = { 'Content-Type': 'application/json' };
        //this.authenticatedChange = new Subject();
    }

    isLoggedInBoolean(): boolean {
        this.isLoggedIn()
            .then((isLogged) => {
                this.authenticated = true;
                return true;
            }).catch((isNotLogged) => {
                this.authenticated = true;
                return false;
            });
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
        //localStorage.clear();
        localStorage.removeItem('user');
        //this.isLoggedIn();
    }

    isLoggedIn(): Promise {
        return new Promise((resolve, reject) => {
            this.localLoginExists()
                .then((exist)=>{
                    return this.getRemoteToken();
                })
                .then((remoteToken) => {
                    let localToken = this.getLocalToken();
                    //console.log('remote token-' + remoteToken);
                    //console.log('local token-' + localToken);

                    return this.compareLocalAndRemoteTokens(localToken, remoteToken);
                })
                .then((areSame) => {
                    this.authenticated = true;
                    return resolve(true);
                })
                .catch(() => {
                    this.authenticated = false;
                    return reject(false);
                });
        })
    }

    private verifyRemoteLogin(): Observable<Response>{
        var respToReturn: Observable<Response>;

        var userDataStringLocal: string = localStorage.getItem('user');
        var token: string = JSON.parse(userDataStringLocal).token;
        var requestOptions = this.httpOptionsService.getRequestOptions(true, token);

        respToReturn =  this.http.post(UserAuthService.VERIFY_LOGIN_URL, '', requestOptions)

        return respToReturn;
    }

    private localLoginExists(): Promise {
        return new Promise((resolve, reject) => {
            var userDataString: string = localStorage.getItem('user');
                if (!userDataString) {
                    return reject(false);
                }

                return resolve(true);
        });
    }

    private getRemoteToken(): Promise {
        return new Promise((resolve, reject) => {
            this.verifyRemoteLogin()
                .map(res => res.json())
                .subscribe((response) => {
                    let remoteToken = response.result.token;

                    if(!remoteToken){
                        return reject(false);
                    }

                    return resolve(remoteToken);
                });
        });
    }

    private getLocalToken(): string {
        var userDataStringLocal: string = localStorage.getItem('user');
        var localToken: string = JSON.parse(userDataStringLocal).token;

        return localToken;
    }

    private compareLocalAndRemoteTokens(localToken: string, remoteToken: string): Promise {
        return new Promise((resolve, reject) => {
            var areSame: boolean = localToken === remoteToken;
            if (!areSame) {
                return reject(false);
            }

            return resolve(true);
        });
    }
}
