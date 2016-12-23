import { Injectable } from '@angular/core';

export enum NoteStatesEnum {
    Empty = <any>'Empty',
    Todo = <any>'Todo',
    Done = <any>'Done',
    NotDone = <any>'NotDone'
}

@Injectable()
export class NoteStatesEnumUnusedClass{
}