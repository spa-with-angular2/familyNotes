import { Component } from '@angular/core';

@Component ({
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styles: [`
        span.active {
			background-color: gray;
        }		
    `]
})
export class FooterComponent{
}
