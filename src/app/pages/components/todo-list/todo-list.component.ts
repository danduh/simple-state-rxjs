import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {Todo} from '../../../services/todo';
import {StoreService} from '../../../services/store.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    public allTodos$: Observable<Todo[]>;

    constructor(private apiService: ApiService,
                private store: StoreService) {
    }

    ngOnInit() {
        this.load();
    }

    load() {
        this.allTodos$ = this.apiService.loadAll();
    }

}
