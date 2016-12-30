import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../../../models/note.model';
import { User } from '../../../models/user.model';
import {NoteStatesEnum} from "../../../enumerations/note-states.enum";

import {NoteService} from '../../../services/note.service';
import {NotesComponent} from "./notes.component";

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
    styleUrls: ['./app/components/main/notes/add-note-component.css' ]
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
        var splittedDate = dtExpire.toString().split(" ", 5);
        var realDate = '';

        splittedDate.forEach(element => {
            realDate += ' ' + element;
        });

        this.noteLikeObject = {
            title: '',
            body: '',
            expireDate: realDate ,
            color: ''

        };

        this.showMoreOptions = false;
    }

    onSubmit(){
        console.log('add note submit action');

        // TODO create new note with the note.service.create
        this.newNote = this._noteService.create(this.noteLikeObject);

        // TODO save the note in the database
        this._noteService.insert(this.newNote);

        // TODO redirect to see notes root
        this._router.navigate(['/notes']);
        // this.router.navigate(['/login']);

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

