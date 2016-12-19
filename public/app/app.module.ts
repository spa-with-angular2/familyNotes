import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { routing } from './app.routing';
import {
	TopbandComponent,
	NavComponent,
	FooterComponent,
	NoContentComponent
} from './components';
import {
	HomeComponent,
	NotesComponent,
	AboutComponent,
	Note
} from './components';

@NgModule({
	imports:[BrowserModule, FormsModule, routing],
	declarations:[
		AppComponent,
		TopbandComponent,
		HomeComponent,
		NotesComponent,
		AboutComponent,
		NavComponent,
		FooterComponent,
		NoContentComponent,
		Note
	],
	providers:[],
	bootstrap:[AppComponent]
})
export class AppModule{}