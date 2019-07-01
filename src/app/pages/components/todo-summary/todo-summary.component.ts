import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Todo} from '../../../services/todo';

export interface TodoSummary {
    total: number;
    done: number;
    notDone: number;
}

@Component({
    selector: 'app-todo-summary',
    templateUrl: './todo-summary.component.html',
    styleUrls: ['./todo-summary.component.scss']
})
export class TodoSummaryComponent implements OnInit {
    public todoSummary: TodoSummary = {} as TodoSummary;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {

    }

    load() {
        this.loadData();
    }


    loadData() {
        this.apiService.loadAll()
            .subscribe((todos: Todo[]) => {
                this.todoSummary.total = todos.length;
                this.todoSummary.done = todos.filter(f => f.done === true).length;
                this.todoSummary.notDone = todos.filter(f => f.done === false).length;
            });
    }

}
