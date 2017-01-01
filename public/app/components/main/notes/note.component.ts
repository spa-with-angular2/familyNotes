import { Component, Input, OnInit } from '@angular/core';

import {NoteComponentInterface } from '../contracts/note-component.contract';
import {ColorsEnum} from '../../../enumerations/colors.enum';
import {NoteStatesEnum } from '../../../enumerations/note-states.enum';
import {EnumUtils } from '../../../enumerations/utilities/enum.utilities';
import {Note} from "../../../models/note.model";

// TODO extract function
function isNullOrUndefined(obj : any) : obj is null | undefined {
    return typeof obj === "undefined" || obj === null;
}

// TODO extract consts
const DEFAULT_COLOR_INDEX: number = ColorsEnum.Gray;
const DEFAULT_STATE_INDEX: number = NoteStatesEnum.Todo;

@Component ({
    selector: 'single-note',
    templateUrl: './app/components/main/notes/note.component.html',
    styleUrls: ['./app/components/main/notes/note-component.css' , './app/assets/css/hover.css']
    
})
export class NoteComponent implements NoteComponentInterface, OnInit{

    @Input() public notedata: Note;

    public iconsPath: string;
    public placeholderImage: string;
    public stateImageUrl: string;

    public noteStatesEnum: any;
    public noteStates: string[];
    public colorsEnum:any;
    public noteColors: string[];

    public showMoreOptions: boolean;

    constructor(){
    }

    ngOnInit(): void {

        this.iconsPath = './app/assets/images/icons/';
        this.placeholderImage = this.iconsPath + 'browser-icon-main.png';
        this.stateImageUrl = this.updateStateImageUrl();

        this.noteStatesEnum = NoteStatesEnum;
        this.noteStates = EnumUtils.values(NoteStatesEnum);
        this.notedata.state.index = DEFAULT_STATE_INDEX;
        this.notedata.state.name = this.noteStates[DEFAULT_STATE_INDEX];
        this.colorsEnum = ColorsEnum;
        this.noteColors = EnumUtils.values(ColorsEnum);
        this.notedata.color = this.noteColors[DEFAULT_COLOR_INDEX];

        this.showMoreOptions = false;

        console.log('expireDate-'+ this.notedata.expireDate)

    }

    changeColor(color: string): void {
        this.notedata.color = color;
    }

    onDateChanged(ev: any): void {
        console.log(ev);
        this.notedata.expireDate = ev.jsdate;
    }

    changeNoteState(state: string): void {
        this.notedata.state.index = this.noteStates.indexOf(state);
        this.notedata.state.name = state;
        this.stateImageUrl = this.updateStateImageUrl();
    }

    updateStateImageUrl(): string {
        var imageUrlToReturn:string = this.placeholderImage;
        var currentStateIndex: number = DEFAULT_STATE_INDEX;
        if(!isNullOrUndefined(this.notedata.state.index)){
            currentStateIndex = this.notedata.state.index;
        }

        if(currentStateIndex === NoteStatesEnum.Todo){
            imageUrlToReturn = this.iconsPath + 'note-state-todo.png'
        } else if(currentStateIndex === NoteStatesEnum.Done){
            imageUrlToReturn = this.iconsPath + 'note-state-done.png'
        } else if (currentStateIndex === NoteStatesEnum.NotDone){
            imageUrlToReturn = this.iconsPath + 'note-state-not-done.png'
        }

        return imageUrlToReturn;
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