import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpOptionsService } from '../http-options.service';

import {User} from "../../models/user.model";

const mainProfilePictureIndex: number = 0;

@Injectable()
export class UserMainService{
    // public user: User;

    private http: Http;
    private httpOptionsService: HttpOptionsService;
    private isLogged: boolean;
    private isLoggedSubject: Subject<boolean>;
    private isUserObjectUpdated: boolean;
    private isUserObjectUpdatedSubject: Subject<boolean>;


    constructor(http: Http, httpOptionsService: HttpOptionsService) {
        this.http = http;
        this.httpOptionsService = httpOptionsService;
        this.isLoggedSubject = new Subject<boolean>();
        this.isUserObjectUpdatedSubject = new Subject<boolean>();
        this.isUserObjectUpdated = false;
    }

    ngOnInit(): void{
    }

    public setIsUserLogged(): void {
        this.isLogged = !!localStorage.getItem('user');
        this.isLoggedSubject.next(this.isLogged);
    }

    public getIsUserLoggedIn(): Observable<boolean> {
        return this.isLoggedSubject.asObservable();
    }

    public setIsUserObjectUpdated(): void {
        this.isUserObjectUpdated = true;
        this.isUserObjectUpdatedSubject.next(this.isUserObjectUpdated);
        this.isUserObjectUpdated = false;
    }

    public getIsUserObjectUpdated(): Observable<boolean> {
        return this.isUserObjectUpdatedSubject.asObservable();
    }

    public getMainProfilePictureUrl(): string {
        var mainProfilePictureUrlToReturn:string = '';

        //mainProfilePictureUrlToReturn = this.user.profilePictures[mainProfilePictureIndex];

        return mainProfilePictureUrlToReturn;
    }

    public hasFamily():boolean {
        // if(this.user.families == null || this.user.families == undefined){
        //     return false;
        // }
        // if(this.user.families.length == 0){
        //     return false;
        // }

        return true;
    }

    public  getFamilies(): string[] {
        var familiesToReturn: string[];

        // TODO not finished method
        familiesToReturn = [];

        console.log('getFamilies call-'+familiesToReturn);
        return familiesToReturn;
    }
}