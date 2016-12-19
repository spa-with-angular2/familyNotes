import { Component } from '@angular/core';

import { NotesComponent } from '../main/notes.component';

@Component({
    selector: 'navigation',
    templateUrl: 'nav.component.html',
    styles: [``],
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