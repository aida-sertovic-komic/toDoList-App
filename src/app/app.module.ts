import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';    
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';

import { AppComponent } from './app.component';
import { NewToDoItemComponent } from './/new-to-do-item.component';
import { TodoItemComponent } from './todo-item.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NewToDoItemComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    TableModule,
    AccordionModule,
    ButtonModule,
    ConfirmDialogModule,
    CalendarModule,
    DialogModule,
    
  ],
  providers: [
    ConfirmationService,
    MessageService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
