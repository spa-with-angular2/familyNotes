import { Component, Input } from '@angular/core';
import { isNullOrUndefined } from "util";

enum State {
    Empty = 0,
    Todo = 1,
    Done = 2,
    NotDone = 3
}

function listEnum(enumClass:any) {
    var values = [];
    for (var key in enumClass) {
        values.push(key);
    }
    values.length = values.length / 2;

    return values;
}

function enumLength(enumClass:any){
    var values = listEnum(enumClass);

    return values.length;
}

@Component ({
    selector: 'single-note',
    templateUrl: 'note.component.html',
    styles: [`
        .status-image{
            min-width: 16px;
            max-width: 20px;
            cursor: pointer;
        }
        .bg-lightgrey {
            background-color: lightgrey;
        }
        .bg-orange {
            background-color: orange;
        }
        .bg-green {
            background-color: green;
        }
        .bg-red {
            background-color: red;
        }
    `]
})
export class Note{
    @Input() notedata = {
        title: 'Note title',
        body: 'Note body text.',
        author: {
            _id: '123',
            username: 'anonymous',
            picture: ''
        },
        color: 'gray',
        status: {
            index: 0
        },
        areUnsavedChanges: false,
        isInEditMode: false,
        isDeleted: false
    };

    iconsPath:string;
    placeholderImage:string;
    noteState:any;
    status1: boolean;

    constructor(){
        this.iconsPath = '../../../assets/images/icons/';
        this.placeholderImage = this.iconsPath + 'browser-icon-main.png';
        this.noteState = State;
        this.status1 = true;
    }

    toggleStatus():void{
        console.log('status toggled');
        var statusIndexToReturn = this.notedata.status.index;
        var statusLen = enumLength(this.noteState);

        // TODO status to return out of range refactor magic numbers
        if(statusIndexToReturn < 0 || statusIndexToReturn >= statusLen){
            throw new Error ('Note status out of range!');
        }

        if(statusIndexToReturn == (statusLen - 1)){
            statusIndexToReturn = 0
        } else {
            statusIndexToReturn += 1;
        }

        console.log('index'+this.notedata.status.index);
        this.notedata.status.index = statusIndexToReturn;
        this.notedata.areUnsavedChanges = true;
    }

    getStatusImagePath(): string {
        var imageSrcToReturn:string = this.placeholderImage;
        var statusIndex:number = 0;
        if(!isNullOrUndefined(this.notedata.status.index)){
            statusIndex = this.notedata.status.index;
        }

        if(statusIndex == this.noteState.Empty ) {
            imageSrcToReturn = this.iconsPath + 'note-state-empty.png'
        } else if(statusIndex == this.noteState.Todo){
            imageSrcToReturn = this.iconsPath + 'note-state-todo.png'
        } else if(statusIndex == this.noteState.Done){
            imageSrcToReturn = this.iconsPath + 'note-state-done.png'
        } else if (statusIndex == this.noteState.NotDone){
            imageSrcToReturn = this.iconsPath + 'note-state-not-done.png'
        }

        return imageSrcToReturn;
    }

    toggleDeleteNote():void {
        if(this.notedata.isDeleted){
            this.notedata.isDeleted = false;
            console.log('delete cancel!');
        } else {
            this.notedata.isDeleted = true;
            console.log('note is deleted!');
        }

        this.notedata.areUnsavedChanges = true;
    }

    toggleEditNote():void {
        if(this.notedata.isInEditMode){
            this.notedata.isInEditMode = false;
            console.log('note is not in edit mode');
        } else {
            this.notedata.isInEditMode = true;
            console.log('note is in edit mode!!');
        }

        this.notedata.areUnsavedChanges = true;
    }

    saveNote():void {
        // TODO note save to database

        // TODO Reload new note data

        this.notedata.areUnsavedChanges = false;

        console.log('Note changes saved to database!');
    }
}