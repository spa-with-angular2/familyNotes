import { Component } from '@angular/core';

@Component({
	selector: 'family-notes-app',
	templateUrl: 'app.component.html',
	styles: [`
		header{
			font-family: Arial, Helvetica, sans-serif;
			border: 1px solid red;
			
			margin: 0;
			padding: 0;
		}
		
		nav{
			background-color: dimgray; 
			border: 1px solid green;
		}
		
		main {
			min-height: 100px;
			backgroud-color: white;
			border: 1px solid green;
		}	
		
		footer{
			border: 1px solid black;
		}
		
		footer span.active {
			background-color: gray;
		}
	`]

})
export class AppComponent{
}