import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TopbandComponent } from './components/header/topband.component';
import { NavComponent } from './components/header/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoContentComponent } from './components/error-pages/no-content.component';
// import {
// 	TopbandComponent,
// 	NavComponent,
// 	FooterComponent,
// 	NoContentComponent
// } from './components';
import {HomeComponent } from './components/main/home.component';
import {NoteComponent } from './components/main/notes/note.component';
import {NotesComponent } from './components/main/notes/notes.component';
import {AddNoteComponent } from './components/main/notes/add-note.component';
import {UserComponent } from './components/users/user.component';

import {AboutComponent } from './components/main/about.component';
import {ProfileComponent } from './components/main/profile/profile.component';
import {LoginComponent } from './components/main/login/login.component';
import {NotesService} from "./services/notes.service";
 // import {
// 	HomeComponent,
// 	NotesComponent,
// 	AboutComponent,
// 	Note
// } from './components';

@NgModule({
	imports:[BrowserModule, FormsModule, routing],
	declarations:[
		AppComponent,
		TopbandComponent,
		HomeComponent,
		NoteComponent,
		NotesComponent,
		AddNoteComponent,
		//UserComponent,
		NavComponent,
		FooterComponent,
		NoContentComponent,
		AboutComponent,
		ProfileComponent,
		LoginComponent

	],
	providers:[NotesService],
	bootstrap:[AppComponent]
})
export class AppModule{}