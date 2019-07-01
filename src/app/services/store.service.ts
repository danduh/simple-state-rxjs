import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Todo} from './todo';
import {ApiService} from './api.service';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    constructor(private apiService: ApiService) {
    }

    private readonly todosSubj = new BehaviorSubject<Todo[]>([]);
    public todos$ = this.todosSubj.asObservable();

    public total$ = this.todos$
        .pipe(
            map(todos => todos.length)
        );

    public summary$ = this.todos$
        .pipe(
            map(todos => {
                return {
                    total: todos.length,
                    done: todos.filter(f => f.done === true).length,
                    notDone: todos.filter(f => f.done === false).length
                };
            })
        );

    getAll() {
        this.apiService.loadAll()
            .subscribe(t => this.todosSubj.next(t));
    }

    addTodo(todo: Todo) {
        this.apiService.addOne(todo)
            .subscribe(t => this.todosSubj.next(t));
    }

    toggleTodo(id: number) {

    }
}
