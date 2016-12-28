import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../../models/note.model';

@Component ({
    selector: 'add-note-component',
    templateUrl: './app/components/main/add-note.component.html',
    styles: [`
        label{
            display: inline-block;
            width: 250px;
        }
        
        input   {
            width: 250px;
        }
        
        .ng-invalid{
            border: 1px solid red;
        }
    `]
})
export class AddNoteComponent implements OnInit{

    newNote: any;

    constructor(private _router: Router){
    }

    onSubmit(){
        console.log('add note submit action');
    }

    ngOnInit(): void {
        var dtExpire: Date = new Date();
        dtExpire.addDays(2);

        this.newNote = {
            title: '',
            body: '',
            expireDate: dtExpire,
            color: ''

        };
    }

}

