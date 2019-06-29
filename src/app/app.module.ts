import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoPageComponent} from './pages/todo-page/todo-page.component';
import {TodoListComponent} from './pages/components/todo-list/todo-list.component';
import {TodoRowComponent} from './pages/components/todo-row/todo-row.component';
import {TodoFormComponent} from './pages/components/todo-form/todo-form.component';
import {FormsModule} from '@angular/forms';
import {ApiService} from './services/api.service';

@NgModule({
    declarations: [
        AppComponent,
        TodoPageComponent,
        TodoListComponent,
        TodoRowComponent,
        TodoFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
