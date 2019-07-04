import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Todo} from '../../../services/todo';
import {StoreService} from '../../../services/store.service';

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
    public total;

    constructor(private apiService: ApiService,
                private store: StoreService) {
    }

    ngOnInit() {
        this.store.total$.subscribe((t) => this.total = t);
        this.store.summary$.subscribe((sum) => {
            this.todoSummary = sum;
        });

    }

    load() {
        this.loadData();
    }


    loadData() {
    }

}
