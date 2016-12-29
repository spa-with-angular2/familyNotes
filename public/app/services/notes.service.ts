// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Import RxJx required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

import {Note} from "../models/note.model";
import {NOTES} from "../components/main/notes/mock-notes";

@Injectable()
export class NotesService{

    constructor(){}

    public getNotes(){
        return Promise.resolve(NOTES);
    }

}