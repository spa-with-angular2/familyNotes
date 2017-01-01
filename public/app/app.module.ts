import {NgModule } from "@angular/core";
import {BrowserModule } from "@angular/platform-browser";
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MyDatePickerModule} from 'mydatepicker/dist/my-date-picker.module';
import {ToastrModule} from "toastr-ng2";

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TopbandComponent } from './components/header/topband.component';
import { NavComponent } from './components/header/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoContentComponent } from './components/error-pages/no-content.component';

import {HomeComponent } from './components/main/home.component';
import {NoteComponent } from './components/main/notes/note.component';
import {NotesComponent } from './components/main/notes/notes.component';
import {AddNoteComponent } from './components/main/notes/add-note.component';

import { AboutComponent } from './components/main/about.component';
import { ProfileComponent } from './components/main/profile/profile.component'; 
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
 
// import {AboutComponent } from './components/main/about.component';
// import {ProfileComponent } from './components/main/profile/profile.component';
// import {LoginComponent } from './components/main/login/login.component';

import {NotesService} from "./services/notes.service";
import {HttpOptionsService} from "./services/http-options.service";
import {ToastrService} from "toastr-ng2";


@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
		routing,
		HttpModule,
		MyDatePickerModule,
		ToastrModule.forRoot()
	],
	declarations:[
		AppComponent,
		TopbandComponent,
		HomeComponent,
		NoteComponent,
		NotesComponent,
		AddNoteComponent,
		NavComponent,
		FooterComponent,
		NoContentComponent,
		AboutComponent,
		ProfileComponent,
		LoginComponent,
		RegisterComponent

	],
	providers:[
		NotesService,
		HttpOptionsService,
		ToastrService
	],
	bootstrap:[AppComponent]
})
export class AppModule{}