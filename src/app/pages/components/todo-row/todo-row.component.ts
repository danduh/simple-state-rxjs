import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../../services/todo';
import {ApiService} from '../../../services/api.service';

@Component({
    selector: 'app-todo-row',
    templateUrl: './todo-row.component.html',
    styleUrls: ['./todo-row.component.scss']
})
export class TodoRowComponent implements OnInit {
    @Input() todo: Todo;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
    }


    completeToggle() {
        this.todo.done = !this.todo.done;

        this.apiService
            .updateOne(this.todo)
            .subscribe();
    }
}
