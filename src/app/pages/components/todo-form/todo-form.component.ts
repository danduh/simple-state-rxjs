import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
    public title;

    constructor() {
    }

    ngOnInit() {
    }


    submit() {
        console.log(this.title);
    }
}
