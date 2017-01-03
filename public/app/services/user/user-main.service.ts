import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpOptionsService } from '../http-options.service';

import {User} from "../../models/user.model";

const mainProfilePictureIndex: number = 0;

@Injectable()
export class UserMainService{

    constructor(
        private http: Http,
        private httpOptionsService: HttpOptionsService
    ) {}

    ngOnInit(): void{
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