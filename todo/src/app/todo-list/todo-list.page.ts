import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;

  constructor() { }

  ngOnInit() {
    this.todoTitle='';
    this.idForTodo=4;
    this.todos = [
      {
        'id':1,
        'title': 'Finish Angular Screenast',
        'completed': false,
        'editing': false,
      },
      {
        'id':2,
        'title': 'Take over the world',
        'completed': false,
        'editing': false,
      },
      {
        'id':3,
        'title': 'One more thing',
        'completed': false,
        'editing': false,
      },
    ];
  }
  addTodo(): void {
    if(this.todoTitle.trim().length === 0){
      return;
    }
    this.todos.push({
      'id': this.idForTodo,
      'title': this.todoTitle,
      'completed': false,
      'editing': false,
    })

    this.todoTitle = '';
    this.idForTodo++;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
