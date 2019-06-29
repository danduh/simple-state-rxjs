import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {of} from 'rxjs';

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
        return of(this.todos);
    }
}
