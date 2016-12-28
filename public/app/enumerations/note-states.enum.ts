import { Injectable } from '@angular/core';

// export enum NoteStatesEnum {
//     Empty = <any>'Empty',
//     Todo = <any>'Todo',
//     Done = <any>'Done',
//     NotDone = <any>'NotDone'
// }

export enum NoteStatesEnum {
    Empty = 0,
    Todo = 1,
    Done = 2,
    NotDone = 3
}

@Injectable()
export class NoteStatesEnumUnusedClass{
}