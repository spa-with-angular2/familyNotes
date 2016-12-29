import { Component, Input } from '@angular/core';

import {NoteComponentInterface } from '../contracts/note-component.contract';
import {ColorsEnum } from '../../../enumerations/colors.enum';
import {NoteStatesEnum } from '../../../enumerations/note-states.enum';
import {EnumUtils } from '../../../enumerations/utilities/enum.utilities';
import {Note} from "../../../models/note.model";

// TODO extract function
function isNullOrUndefined(obj : any) : obj is null | undefined {
    return typeof obj === "undefined" || obj === null;
}

@Component ({
    selector: 'single-note',
    templateUrl: './app/components/main/notes/note.component.html',
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
export class NoteComponent implements NoteComponentInterface{

    @Input() notedata: Note;

    iconsPath:string;
    placeholderImage:string;
    noteState:any;
    status1: boolean;
    noteColors: string[];
    noteColorsIndexes: number[];

    public showMoreOptions: boolean;

    constructor(){
        this.iconsPath = './app/assets/images/icons/';
        this.placeholderImage = this.iconsPath + 'browser-icon-main.png';
        this.noteState = NoteStatesEnum;
        this.status1 = true;
        this.noteColorsIndexes = EnumUtils.indexes(ColorsEnum);
        this.noteColors = EnumUtils.values(ColorsEnum);
        this.showMoreOptions = false;
    }

    getStatusImagePath(): string {
        var imageUrlToReturn:string = this.placeholderImage;
        var currentStateIndex: number = NoteStatesEnum.Empty;
        if(!isNullOrUndefined(this.notedata.stateIndex)){
            currentStateIndex = this.notedata.stateIndex;
        }

        if(currentStateIndex === NoteStatesEnum.Empty ) {
            imageUrlToReturn = this.iconsPath + 'note-state-empty.png'
        } else if(currentStateIndex === NoteStatesEnum.Todo){
            imageUrlToReturn = this.iconsPath + 'note-state-todo.png'
        } else if(currentStateIndex === NoteStatesEnum.Done){
            imageUrlToReturn = this.iconsPath + 'note-state-done.png'
        } else if (currentStateIndex === NoteStatesEnum.NotDone){
            imageUrlToReturn = this.iconsPath + 'note-state-not-done.png'
        }

        return imageUrlToReturn;
    }

    toggleState():void{
        console.log('state toggled');
        var currentStateIndex = this.notedata.stateIndex;
        var statesLen = EnumUtils.values(this.noteState).length;

        console.log('currentStateIndex '+currentStateIndex);
        console.log('statesLen '+statesLen);

        // TODO status to return out of range refactor magic numbers
        if(currentStateIndex < 0 || currentStateIndex >= statesLen){
            throw new Error ('Note status out of range!');
        }

        if(currentStateIndex == (statesLen - 1)){
            currentStateIndex = 0
        } else {
            currentStateIndex += 1;
        }

        // TODO remove commented logs
        // console.log('index'+this.notedata.status.index);
        this.notedata.stateIndex = currentStateIndex;
        this.notedata.areUnsavedChanges = true;
    }

    toggleEdit():void {
        if(this.notedata.isInEditMode){
            this.notedata.isInEditMode = false;
            console.log('note is in view mode');
        } else {
            this.notedata.isInEditMode = true;
            console.log('note is in edit mode!!');
        }

        this.notedata.areUnsavedChanges = true;
    }

    toggleDelete():void {
        if(this.notedata.isDeleted){
            this.notedata.isDeleted = false;
            console.log('delete cancel!');
        } else {
            this.notedata.isDeleted = true;
            console.log('note is deleted!');
        }

        this.notedata.areUnsavedChanges = true;
    }

    toggleColor(): void {
    }

    toggleShowMoreOptions(): void{
        if(this.showMoreOptions){
            this.showMoreOptions = false;
        } else {
            this.showMoreOptions = true;
        }
    }

    save(): Note {
        // TODO note save to database

        // TODO Reload new note data

        this.notedata.areUnsavedChanges = false;

        console.log('Note changes saved to database!');

        return undefined;
    }

    delete(): Note {

        console.log('Note deleted flag set!');

        return undefined;
    }
}