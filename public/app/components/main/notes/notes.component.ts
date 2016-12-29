import {Component, OnInit} from '@angular/core';
import {Note} from "../../../models/note.model";
import {NotesService} from "../../../services/notes.service";

@Component ({
    selector: 'notes-container',
    templateUrl: './app/components/main/notes/notes.component.html',
    providers: [NotesService],
    styles: [``]
})
export class NotesComponent{

    notes: Note[];

    constructor(private notesService: NotesService){
    }

    ngOnInit(){
        this.getNotes();
    }

    getNotes(){
        this.notesService.getNotes()
            .then((notes: Note[]) => {
                this.notes = notes;
            });
    }
}