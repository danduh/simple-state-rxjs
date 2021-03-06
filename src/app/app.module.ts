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
import {TodoSummaryComponent} from './pages/components/todo-summary/todo-summary.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        TodoPageComponent,
        TodoListComponent,
        TodoRowComponent,
        TodoFormComponent,
        TodoSummaryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
