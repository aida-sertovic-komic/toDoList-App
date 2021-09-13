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
  idList : Number[] = [];
  newList : Number[] = [];
  maxId : Number = 0;
  text: String = '';
  done: boolean = false;
  newt : ToDos | undefined;

  constructor(private ToDosService: ToDosService) {}

  ngOnInit(): void {
    this.ToDosService.getList().subscribe((data) => {
      this.list = data;
      // console.log(this.list);
      // this.id = Math.max((Number(this.list)));
      // console.log(this.id);
      this.list.forEach((element)=> {
        this.newt = element;
        this.id = this.newt.id;
        this.idList.push(this.id);
        this.newList = this.idList;
        console.log(this.newList);
      })
    })
  }
}
  
