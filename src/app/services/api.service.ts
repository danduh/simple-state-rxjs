import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    loadAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>('http://localhost:3000/todos');
    }

    addOne(todo: Todo) {
        return this.http.post<Todo[]>('http://localhost:3000/todos', todo);
    }

    updateOne(todo: Todo) {
        return this.http.put<Todo[]>('http://localhost:3000/todos/' + todo.id, todo);
    }
}
