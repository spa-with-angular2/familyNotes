import {Component } from '@angular/core';

@Component({
	selector: 'family-notes-app',
	templateUrl: './app/app.component.html',
	styles: [`
		header{
			font-family: Arial, Helvetica, sans-serif;
			
			margin: 0;
			padding: 0;
		}
		main {
			min-height: 600px;
		}	
	`]

})
export class AppComponent{
}