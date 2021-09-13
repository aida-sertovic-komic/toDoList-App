import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-new-to-do-item',
  templateUrl: './new-to-do-item.component.html',
  styleUrls: ['./new-to-do-item.component.css'],
})
export class NewToDoItemComponent implements OnInit {
  toDoTask: string = '';
  done: boolean = false;
  id: Number = 0;

  ngOnInit(): void {}

  addTask(): void {
    console.log(this.toDoTask);
  }
}
