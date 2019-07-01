import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Todo} from '../../../services/todo';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
    public title;

    constructor(public apiService: ApiService) {
    }

    ngOnInit() {
    }


    submit() {
        const todo: Todo = {
            title: this.title,
            done: false
        };
        this.title = null;

        this.apiService
            .addOne(todo)
            .subscribe(() => {

            });
    }
}
