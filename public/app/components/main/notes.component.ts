import { Component } from '@angular/core';

@Component ({
    selector: 'notes-container',
    templateUrl: 'notes.component.html',
    styles: [``]
})
export class NotesComponent{
    notes = [
        {
            title: 'Bank',
            body: 'Go to the bank and take the coins for Toni and Veronic',
            status: {index:0}
        },
        {
            title: 'Appotheke',
            body: 'Go to the pharmacy and take Nelis pills',
            status: {index:1}
        },
        {
            title: 'Maxi Cosi',
            body: 'Put the MaxiCosi for sale in OLX',
            status: {index:2}
        },
        {
            title: 'Toni bd',
            body: 'Tkae wine and present',
            status: {index:3}
        }
    ];

    addNote() : boolean{
        console.log('add a note from notesComponent');

        // used not to redirect page from the functions call
        return false;
    }
}