import { Action } from "@ngrx/store";

export namespace CounterAction {
  export enum Types {
    Increm = '[Counter Component] Increment',
    Decrem = '[Counter Component] Decrem',
    Reset = '[Counter Component] Reset',
    ActionSuccess = '[Counter Component] ActionSuccess',
  }
  
  export class Increment implements Action {
    readonly type = Types.Increm
    // constructor( public payload: any ) {}
  }
  
  export class Decrement implements Action {
    readonly type = Types.Decrem
    // constructor( public payload: any ) {}
  }
  
  export class Reset implements Action {
    readonly type = Types.Reset
    // constructor( public payload: any ) {}
  }
  
  export class ActionSuccess implements Action {
    readonly type = Types.ActionSuccess
    constructor( public payload: any ) {}
  }
  
  export type Actions = Increment | Decrement | ActionSuccess | Reset
}