import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../../models/note.model';

function addDays(date: Date, days: number): Date {
    console.log('adding ' + days + ' days');
    console.log(date);
    date.setDate(date.getDate() + (days));
    console.log(date);
    return date;
}

@Component ({
    selector: 'add-note-component',
    templateUrl: './app/components/main/add-note.component.html',
    styles: [`
        label{
            display: inline-block;
            width: 250px;
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

    newNote: any;
    showMoreOptions: boolean;

    constructor(private _router: Router){
    }

    onSubmit(){
        console.log('add note submit action');
    }

    toggleShowMoreOptions(): void{
        console.log('show more options click');

        if(this.showMoreOptions){
            this.showMoreOptions = false;
        } else {
            this.showMoreOptions = true;
        }
    }


    ngOnInit(): void {
        var dtExpire: Date = new Date();
        dtExpire = addDays(dtExpire, 5);

        this.newNote = {
            title: '',
            body: '',
            expireDate: dtExpire,
            color: ''

        };

        this.showMoreOptions = false;
    }
}

