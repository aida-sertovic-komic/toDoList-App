import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { AppComponent } from './app.component';
import { NewToDoItemComponent } from './/new-to-do-item.component';
import { TodoItemComponent } from './todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewToDoItemComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
