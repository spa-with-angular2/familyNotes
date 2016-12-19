import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {
    HomeComponent,
    NotesComponent,
    AboutComponent,
    NoContentComponent
} from './components';

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