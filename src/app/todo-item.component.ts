import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ToDos } from './todos';
import { ToDosService } from './todos.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'pm-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [DatePipe]
})

export class TodoItemComponent implements OnInit {
  list: ToDos[] = [];
  idList: number[] = [];
  selectedTask : any = {};
  maxId: number = 0;
  toDoTask = '';
  newText : String = '';
  toDo: any = {};
  showTime : boolean = true;
  @ViewChild('dt1') dt1: Table | undefined;
  value: Date | undefined;
  displayBasic: boolean | undefined = false;
  myDate : Date | any = new Date();


  constructor(private ToDosService: ToDosService, private confirmationService: ConfirmationService, private messageService: MessageService, 
              private datePipe: DatePipe) {
    this.ToDosService.toDoObject.subscribe((data) => {
      this.toDo = data;
      this.list?.push(this.toDo);
      this.biggestNumber();
    });
    this.myDate = this.datePipe.transform(this.myDate, 'MM/dd/yyyy HH:mm');
  }

  checkDate(itemDate : Date) {
    if(itemDate.getTime() > new Date().getTime()){
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.ToDosService.getList().subscribe((data) => {
      this.list = data.map((el: any) => {
        el.date = new Date(el.date);
        return el;
      });
      console.log(data)
      this.biggestNumber();
    }); 
  }
  
  showBasicDialog(item : ToDos){
    this.selectedTask = item;
    this.displayBasic = true;
}

saveEdit() {
this.displayBasic = false;
}

  biggestNumber(): void {
    this.list?.forEach((element) => {
      this.idList.push(element.id);
      this.maxId = Math.max(
        this.idList.reduce(function (a, b) {
          return Math.max(a, b);
        }, 0)
      );
    });
    this.ToDosService.biggestNumber.emit(this.maxId);
  }


  clear(table: Table) {
    table.clear();
}

applyFilterGlobal1($event: any, stringVal: any) {
  this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
}

confirm2(itemId : number) {
  this.confirmationService.confirm({
      message: 'Do you want to delete this item?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
         // delete items
      const index = this.list.findIndex(el => el.id === itemId);
      if(index > -1){
        this.list.splice(index,1);
      }
      },
      reject: (type: any) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
      }
  });
}
}

  // performFilter(filterBY: string) : ToDos[] {
  //    filterBY = filterBY.toLocaleLowerCase();
  //    return this.list?.filter((data) =>
  //    data.text.includes(filterBY));
  // }

  // sortById() : void {
  //   this.list?.sort(function(a,b) {
  //     return b.id - a.id;
  //   })
  // }

  // sortByText(): void {
  //   this.list?.sort((a,b) => {
  //     return('' + a.text).localeCompare(b.text);
  //   })
  // }

  // sortByTextZ() : void {
  //   this.list?.sort((a,b) => {
  //     return(b.text).localeCompare(a.text);
  //   })
  // }

  // sortByNotDone() : void {
  //   this.list?.sort((a,b) => {
  //    return Number(a.done) - Number(b.done);
  //   }) }
    