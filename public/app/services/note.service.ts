// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Import RxJx required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

import {Note} from "../models/note.model";
import {NoteStatesEnum} from "../enumerations/note-states.enum";
import {NoteServiceInterface} from "./contracts/note-service.contract";
import {User} from "../models/user.model";

@Injectable()
export class NoteService implements NoteServiceInterface{

    constructor(){}

    // Get all movies
    public create(noteLikeObject: any): Note{

        var newNote: Note;

        // TODO temp variable to be replaced with the real logged in user
        var currentLoggedInUser: User;

        noteLikeObject['id'] = '';
        noteLikeObject['author'] = currentLoggedInUser;
        noteLikeObject['state'] = NoteStatesEnum.Empty;
        noteLikeObject['postedDate'] = new Date();

        newNote = new Note(
            noteLikeObject.id,

            noteLikeObject.title,
            noteLikeObject.body,
            noteLikeObject.author,
            noteLikeObject.state,
            noteLikeObject.postedDate,

            noteLikeObject.expireDate,
            noteLikeObject.color,

            noteLikeObject.areUnsavedChanges,
            noteLikeObject.isInEditMode,
            noteLikeObject.isDeleted,

        );
        // TODO remove logging
        //console.log(noteDataObject);

        return newNote;
    }

    public insert(note: Note): Note{
        var dbNote: Note;

        // TODO post to server at insert rout

        return dbNote;
    }

    public update(note: Note): Note{
        var dbNote: Note;

        // TODO post to server at update rout

        return dbNote;
    }

    public delete(note: Note): Note{
        var dbNote: Note;

        // TODO post to server at delete rout

        return dbNote;
    }
}