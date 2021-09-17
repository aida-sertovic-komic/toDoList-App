import { ToDosService } from './todos.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'pm-new-to-do-item',
  templateUrl: './new-to-do-item.component.html',
  styleUrls: ['./new-to-do-item.component.css'],
})
export class NewToDoItemComponent implements OnInit {
  toDoTask: String = '';
  done: boolean = false;
  id: number = 0;
  maxId: number | any;
  date: Date | undefined;

  constructor(private ToDosService: ToDosService) {
    this.ToDosService.biggestNumber.subscribe((data) => {
      this.maxId = data;
    });
  }

  ngOnInit(): void {
   
  }

  addTask(): void {
    const toDo = { id: this.maxId+1, text:this.toDoTask, done: false, date: this.date };
    this.ToDosService.toDoObject.emit(toDo);
    this.toDoTask = '';
    console.log(toDo);
  }

}
