import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../../../models/note.model';
import { User } from '../../../models/user.model';
import {NoteStatesEnum} from "../../../enumerations/note-states.enum";

import {NoteService} from '../../../services/note.service';

function addDays(date: Date, days: number): Date {
    console.log('adding ' + days + ' days');
    console.log(date);
    date.setDate(date.getDate() + (days));
    console.log(date);
    return date;
}

@Component ({
    selector: 'add-note-component',
    templateUrl: './app/components/main/notes/add-note.component.html',
    providers: [NoteService],
    styles: [`
        label{
            display: inline-block;
            width: 150px;
        }
        
        input   {
            width: 350px;
        }
        textarea   {
            width: 350px;
        }
        
        .ng-invalid{
            border: 1px solid red;
        }
    `]
})
export class AddNoteComponent implements OnInit{

    public newNote: Note;
    public noteLikeObject: any;
    public showMoreOptions: boolean;

    constructor(private _noteService: NoteService, private _router: Router){
    }


    ngOnInit(): void {
        var dtExpire: Date = new Date();
        dtExpire = addDays(dtExpire, 5);

        this.noteLikeObject = {
            title: '',
            body: '',
            expireDate: dtExpire,
            color: ''

        };

        this.showMoreOptions = false;
    }

    onSubmit(){
        console.log('add note submit action');

        // TODO create new note with the note.service.create
        this.newNote = this._noteService.create(this.noteLikeObject);

        // TODO save the note in the database
        console.log(this.newNote);

        // TODO redirect to see notes root
    }

    toggleShowMoreOptions(): void{
        console.log('show more options click');

        if(this.showMoreOptions){
            this.showMoreOptions = false;
        } else {
            this.showMoreOptions = true;
        }
    }
}

