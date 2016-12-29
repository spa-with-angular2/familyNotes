///<reference path="../node_modules/@types/core-js/index.d.ts"/>

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';


// TODO find the reference and uncomment
// if (process.env.ENV === 'production') {
//     enableProdMode();
// }
platformBrowserDynamic().bootstrapModule(AppModule);