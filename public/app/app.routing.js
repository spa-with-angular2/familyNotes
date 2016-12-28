"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/main/home.component');
var notes_component_1 = require('./components/main/notes.component');
var add_note_component_1 = require('./components/main/add-note.component');
var about_component_1 = require('./components/main/about.component');
var no_content_component_1 = require('./components/error-pages/no-content.component');
var profile_component_1 = require('./components/main/profile/profile.component');
var login_component_1 = require('./components/main/login/login.component');
// import {
//     HomeComponent,
//     NotesComponent,
//     AboutComponent,
//     NoContentComponent
// } from './components';
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'notes',
        component: notes_component_1.NotesComponent
    },
    {
        path: 'add-note',
        component: add_note_component_1.AddNoteComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    // {
    //     path: 'detail', loadChildren: () => System.import('./+detail')
    //     .then((comp: any) => comp.default),
    // },
    {
        path: '**',
        component: no_content_component_1.NoContentComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map