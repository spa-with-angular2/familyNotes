import { Component } from '@angular/core';

@Component({
    selector: 'top-band',
    templateUrl: 'topband.component.html',
    styles: [`
        .top-band{
            background-color: lightgray;
        }
        .logo{
            color: white;
        }
    `]
})
export class TopbandComponent{
}