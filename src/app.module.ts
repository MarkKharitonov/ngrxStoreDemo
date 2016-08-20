import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {reset, people, partyFilter} from "./store";
import {App} from './app';

@NgModule({
    imports: [BrowserModule,
        StoreModule.provideStore({people: reset(people), partyFilter})
    ],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule {
}
