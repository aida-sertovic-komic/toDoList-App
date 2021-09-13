import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand"></a>
      <ul class="nav nav-pills">
        <li><a class="nav-link">To do list application</a></li>
        <!-- <li><a class='nav-link'>Product List</a></li> -->
      </ul>
    </nav>
    <div class="card" style="width: 60rem;">
      <div class="card-body">
        <pm-new-to-do-item></pm-new-to-do-item>
        <pm-todo-item></pm-todo-item>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDoListApp';

}
