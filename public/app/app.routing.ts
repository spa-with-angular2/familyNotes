import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/main/home.component';
import { NotesComponent } from './components/main/notes.component';
import { AboutComponent } from './components/main/about.component';
import { NoContentComponent } from './components/error-pages/no-content.component';

// import {
//     HomeComponent,
//     NotesComponent,
//     AboutComponent,
//     NoContentComponent
// } from './components';

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
        path: 'about',
        component: AboutComponent
    },
    // {
    //     path: 'detail', loadChildren: () => System.import('./+detail')
    //     .then((comp: any) => comp.default),
    // },
    {
        path: '**',
        component: NoContentComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);