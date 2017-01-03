import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/main/home.component';
import { NotesComponent } from './components/main/notes/notes.component';
import { AddNoteComponent } from './components/main/notes/add-note.component';
import { AboutComponent } from './components/main/about.component';
import { NoContentComponent } from './components/error-pages/no-content.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { LoginComponent } from './components/main/login/login.component';
import { LogoutComponent } from "./components/main/logout/logout.component";
import { RegisterComponent } from './components/main/register/register.component';

import { IsLoggedUserGuard } from "./route-guards/is-logged.guard";
import { ContactsComponent } from './components/main/contacts/contacts.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'notes',
        component: NotesComponent
    },
    {
        path: 'add-note',
        component: AddNoteComponent,
        canActivate: [IsLoggedUserGuard]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [IsLoggedUserGuard],
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: '**',
        component: NoContentComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);