import { Action } from '@ngrx/store';
import { CounterAction } from './counter.actions';


export const initialState = {
  data: {},
  minerals:1000,
  loading:false,
  type: "none"
};

export function counterReducer(state = initialState, action: CounterAction.Actions) {
  switch (action.type){
    case CounterAction.Types.Increm:
      return {
        ...state,
        loading: true,
        type: "Increment"
      }
    
    case CounterAction.Types.Decrem:
      return {
        ...state,
        loading: true,
        type: "Decrement"
      }

    case CounterAction.Types.ActionSuccess:
      const data = action.payload;
      return {
        ...state,
        data:data,
      }
      
    case CounterAction.Types.Reset:
      return {
        ...state,
        data:{},
        type:""
      }
  }
}