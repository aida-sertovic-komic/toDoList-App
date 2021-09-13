import { Component, OnInit } from '@angular/core';
import { ToDos } from './todos';
import { ToDosService } from './todos.service';

@Component({
  selector: 'pm-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  list: ToDos[] | undefined;
  id: Number = 0;
  text: String = '';
  done: boolean = false;

  constructor(private ToDosService: ToDosService) {}

  ngOnInit(): void {
    this.ToDosService.getList().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }
}
