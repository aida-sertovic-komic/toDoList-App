import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { ToDos } from './todos';
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ToDosService {

    private toDoUrl = 'assets/todos.json';
    biggestNumber = new EventEmitter<number>();
    toDoObject = new EventEmitter<any>();
    filterText = new EventEmitter<String>();
    
    constructor(private http: HttpClient) {}

    getList(): Observable<ToDos[]> {
        return this.http.get<ToDos[]>(this.toDoUrl).pipe(
            tap(data => console.log('All:', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError ( err: HttpErrorResponse){
        let errorMessage= '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }


}