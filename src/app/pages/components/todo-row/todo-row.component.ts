import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../../services/todo';

@Component({
    selector: 'app-todo-row',
    templateUrl: './todo-row.component.html',
    styleUrls: ['./todo-row.component.scss']
})
export class TodoRowComponent implements OnInit {
    @Input() todo: Todo;

    constructor() {
    }

    ngOnInit() {
    }


    completeToggle() {
        this.todo.done = !this.todo.done;
    }
}
