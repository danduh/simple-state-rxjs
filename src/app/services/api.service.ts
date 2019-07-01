import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {observable, Observable, of} from 'rxjs';
import {makeid} from './utils';

export const TODOS: Todo[] = [
    {
        id: 'sadasd',
        title: 'Apple',
        done: false
    },
    {
        id: 'sadacsf',
        title: 'Raspberry',
        done: true
    },
    {
        id: 'sa23df',
        title: 'CocaCola ',
        done: false
    }
];

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private todos = TODOS;

    constructor() {
    }

    loadAll() {
        console.log('Loaded All', console.log(this.todos));
        return of([...JSON.parse(JSON.stringify(this.todos))]);
    }

    addOne(todo: Todo) {
        return new Observable((subscriber) => {
            todo.id = makeid(10);
            this.todos.push(todo);
            console.log('Added One', todo);
            subscriber.complete();
        });
    }

    updateOne(todo: Todo) {
        return new Observable((subscriber) => {
            this.todos.find((t) => t.id === todo.id).done = todo.done;
            console.log('Updated One', todo);
            subscriber.complete();
        });
    }
}
