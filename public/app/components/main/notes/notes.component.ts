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
    // notes = [
    //     {
    //         title: 'Bank',
    //         body: 'Go to the bank and take the coins for Toni and Veronic',
    //         status: {index:0}
    //     },
    //     {
    //         title: 'Appotheke',
    //         body: 'Go to the pharmacy and take Nelis pills',
    //         status: {index:1}
    //     },
    //     {
    //         title: 'Maxi Cosi',
    //         body: 'Put the MaxiCosi for sale in OLX',
    //         status: {index:2}
    //     },
    //     {
    //         title: 'Toni bd',
    //         body: 'Tkae wine and present',
    //         status: {index:3}
    //     }
    // ];

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

    // addNote() : boolean{
    //     console.log('add a note from notesComponent');
    //
    //     // used not to redirect page from the functions call
    //     return false;
    // }
}