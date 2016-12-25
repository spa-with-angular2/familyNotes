import { Component } from '@angular/core';

import { NotesComponent } from '../main/notes.component';

@Component({
    selector: 'navigation',
    templateUrl: './app/components/header/nav.component.html',
    styleUrls: ['./app/components/header/nav.css'],
    providers: [ NotesComponent]
})

export class NavComponent{
    notes: NotesComponent;
    addNoteFn: any;

    constructor(notesComponent: NotesComponent){
        this.notes = notesComponent;
        //this.addNoteFn = notesComponent.addNote;
    }
}