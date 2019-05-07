import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map, first } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CounterAction } from './counter.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CounterEffects {
  
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect() 
  Increm$ = this.actions$.pipe(
    ofType(CounterAction.Types.Increm), 
    switchMap(action => {
      return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(first()).
        pipe( map( data => {
          return new CounterAction.ActionSuccess(data)
        } ) )
    })
  );

  @Effect() 
  Decrem$ = this.actions$.pipe(
    ofType(CounterAction.Types.Decrem), 
    switchMap(action => {
      return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments").pipe(first()).
        pipe( map( data => {
          return new CounterAction.ActionSuccess(data)
        } ) )
    })
  );
}